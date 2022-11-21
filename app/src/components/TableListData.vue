<template>
    <div class="container">
        <div class="table table-responsive">
            <table>
                <thead>
<!-- Header in table -->
                </thead>
                <tbody>
                    <b-tbody :items="data"></b-tbody>
                </tbody>
            </table>
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