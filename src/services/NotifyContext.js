/* 
import toastr from 'toastr'
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export const success = Msg => {
    toastr.success(Msg, 'Success')
} 

export const warning = Msg => {
    toastr.warning(Msg, 'Warning')
}

export const error = Msg => {
    toastr.error(Msg, 'Error')
}

 */

import { toast } from 'react-toastify';
 
export const success = Msg => {
    toast.success(Msg, {
        position: toast.POSITION.TOP_CENTER
    });
}

export const error = Msg => {
    toast.error(Msg, {
        position: toast.POSITION.TOP_CENTER
    });
}

/* toast.error("Error Notification !", {
    position: toast.POSITION.TOP_LEFT
});

toast.warn("Warning Notification !", {
    position: toast.POSITION.BOTTOM_LEFT
});

toast.info("Info Notification !", {
    position: toast.POSITION.BOTTOM_CENTER
});

toast("Custom Style Notification with css class!", {
    position: toast.POSITION.BOTTOM_RIGHT,
    className: 'foo-bar'
}); */