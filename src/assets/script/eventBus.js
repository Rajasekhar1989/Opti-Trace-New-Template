/* Import TinyEmitter for event handling */
import { TinyEmitter } from "tiny-emitter"; 

/* Create a new instance of TinyEmitter */
const emitter = new TinyEmitter();

/* Define an event bus function that returns the emitter instance */
const eventBus = () => {
  /* Return an object containing the emitter */
  return { emitter }; 
};

/* Export the eventBus function as the default export */
export default eventBus;
