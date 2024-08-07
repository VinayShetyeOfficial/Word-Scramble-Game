import styled from "styled-components";

const MenuModalWrapper = styled.div`
.modal_box {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        rgba(10, 37, 64, 0.5) 0px -10px 8px 3px inset;
}

.modal_items::-webkit-scrollbar {
  width: 4px;
}

.help_modal{
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -4px 0px inset;
}

.modal_items::-webkit-scrollbar-track {
    padding-left: 50px;
    background: #f1f1f1;
}

.modal_items::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #888;
    opacity: 0.5;
}

.btn-close{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.modal-btn{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.modal-btn:active .icon{
    color: #166534;
    opacity: .7;
}

@media (max-width: 612px){
    .modal_box{
        padding: 32px 28px;
        max-width: 90%;
    }

    .help_modal{
        max-width: 70%;
    }

    .help_modal h3{
        font-size: 24px;
        margin-bottom: 12px;
    }

    .modal_item p{
        padding-right: 8px;
        line-height: 18px;
        font-size: 16px;
    }

    .space-x-2 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(10px* var(--tw-space-x-reverse));
        margin-left: calc(10px* calc(1 - var(--tw-space-x-reverse)));
    }

    .space-y-2 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(8px /* 16px */ * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(8px /* 16px */ * var(--tw-space-y-reverse));
    }
}

@media (max-width: 532px){
    .modal_box{
        padding: 32px 22px;
    }

    .modal_box_wrapper h2{
        font-size: 28px;
    }

    .modal_box_wrapper button img{
        width: 40px;
        height: 40px;
    }

    .btn_wrapper button{
        max-width: 230px;
    }

    .btn_wrapper button span{
        font-size: 20px;
        padding: 12px 30px;
    }

    .modal_items{
        overflow: hidden scroll;
        max-height: 20rem;
    }

    .help_modal{
        max-width: 80%;
    }
}
`;

export default MenuModalWrapper;