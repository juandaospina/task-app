import React, { useMemo, useState, useContext } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import { differenceInSeconds } from "date-fns";
import { toast } from 'sonner';
import Modal from "react-modal";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("es", es);

import { todoContext } from "../../context/TodoContext";
import { TAG_COLORS } from "../../../constants";
import { Todo } from "../../types/todo";
import "./index.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const values = {
  title: "",
  description: "",
  dateStart: null,
  dateEnd: null,
  tag: "",
};

export const TodoModal = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [formValues, setFormValaues] = useState(values);
  const { handleModal, setHandleModal, onAddTask } = useContext(todoContext);

  const titleMemo = useMemo(() => {
    if (!isSubmited) return "";
    return formValues.title.length > 0 ? "" : "is-invalid";
  }, [formValues.title, isSubmited]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target: { name, value } } = event;
    setFormValaues({
      ...formValues,
      [name]: value,
    });
  };

  const onDateChange = (event: any, itemDate: string) => {
    setFormValaues({
      ...formValues,
      [itemDate]: event,
    });
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    console.log("[select_input_change]", { name, value })
    setFormValaues({
      ...formValues,
      [name]: value
    })
  }

  const onModalCloseHandler = () => {
    setHandleModal(false);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmited(true);

    const differenceInTime = differenceInSeconds(
      formValues.dateEnd as any,
      formValues.dateStart as any
    );
    if (isNaN(differenceInTime) || differenceInTime < 0) {
      toast.error('Ingrese un rango de fechas válidas')
      return;
    }
    if (formValues.title.length <= 0) return;
    
    onAddTask(formValues as Todo)
    setIsSubmited(false);
    setFormValaues(values);
    setHandleModal(false);
  };

  return (
    <div>
      <Modal
        isOpen={handleModal}
        onRequestClose={onModalCloseHandler}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        contentLabel="Example Modal"
        closeTimeoutMS={200}
      >
        <h4 className="ps-2">Nuevo tarea</h4>
        <form className="container" onSubmit={onSubmit}>
          <div className="form-group mb-2">
            <label>Fecha y hora inicio</label>
            <DatePicker
              selected={formValues.dateStart}
              onChange={(date) => onDateChange(date, "dateStart")}
              dateFormat="Pp"
              showTimeSelect
              locale="es"
              className="form-control"
              timeCaption="Hora"
            />
          </div>

          <div className="form-group mb-2">
            <label>Fecha y hora fin</label>
            <DatePicker
              minDate={formValues.dateStart}
              selected={formValues.dateEnd}
              onChange={(date) => onDateChange(date, "dateEnd")}
              dateFormat="Pp"
              showTimeSelect
              locale="es"
              className="form-control"
              timeCaption="Hora"
            />
          </div>

          <div className="form-group mb-2">
            <label>
              Titulo tarea {" "}
              <small className="form-text text-muted">(Título corto)</small>
            </label>
            <input
              type="text"
              className={`form-control ${titleMemo}`}
              placeholder="Título del evento"
              value={formValues.title}
              onChange={(event) => onInputChange(event)}
              name="title"
              autoComplete="off"
            />
          </div>

          <div className="form-group mb-2">
            <label>Tag evento</label>
            <select className="form-control" name="tag" value={formValues.tag} onChange={onSelectChange}>
              <option value="">Seleccione una opción</option>
              {Object.entries(TAG_COLORS).map(([key]) => (
                <option key={key} value={key}>{key}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-2">
            <label>
              Notas evento{" "}
              <small className="form-text text-muted">(Opcional)</small>
            </label>
            <textarea
              className="form-control"
              placeholder="Descripción"
              value={formValues.description}
              onChange={(event) => onInputChange(event)}
              rows={5}
              name="description"
            ></textarea>  
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span>Guardar</span>
          </button>
        </form>
      </Modal>
    </div>
  );
};
