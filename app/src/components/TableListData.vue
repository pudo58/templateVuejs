<template>
    <div class="container">
        <div class="table table-responsive">
           <b-table striped hover
            :items="data">
           </b-table>
        </div>
    </div>
</template>
<script>
export default{
    name : "TableListData",
    props : {
        data : {
            type : Array,
            default : () => []
        },
        header : {
            type : Array,
            default : () => []
        }
    },
}
</script>