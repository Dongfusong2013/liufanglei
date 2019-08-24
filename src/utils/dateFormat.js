
export function dateFormat(displayTime){
          var date = new Date(displayTime);
          return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
      }
