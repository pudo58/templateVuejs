<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                <slot name="title"></slot>
              </h5>
              <button type="button" @click="hide" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="hide">No</button>
              <button type="button" class="btn btn-primary" @click="clicked">Yes</button>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default{
    name : "ModalConfirm",
    props : {
        clicked : {
            type : Function,
            required : true
        }
    },methods : {
        show(){
            document.getElementsByClassName('modal')[0].style.display = 'block'
        },
        hide(){
            document.getElementsByClassName('modal')[0].style.display = 'none'
        }
    }
}
</script>