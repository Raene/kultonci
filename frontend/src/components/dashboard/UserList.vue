<template>
    <div class="col-md-12 my-4">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">User List</h5>
                <p class="card-text">There are currently bookCount users in the store.</p>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Delete Book</th>
                            <!-- <th>Date</th> -->
                            <!-- <th>Status</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Tomi</td>
                            <td>3</td>
                            <!-- <td>901-6206 Cras Av.</td> -->
                            <!-- <td>Apr 24, 2019</td> -->
                            <td><span class="badge badge-pill badge-danger">Delete</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div> <!-- simple table -->
</template>

<script>
export default {
	// computed: {
 //        books() {
 //            return this.$store.getters['book/books'];
 //        },

 //        genres() {
 //        	return this.$store.getters['genre/genres'];
 //        },

 //        authors() {
 //        	return this.$store.getters['author/authors'];
 //        },

 //        bookCount() {
 //        	return this.$store.getters['book/bookCount'];
 //        }
 //    },

    methods: {
	// refactor later
    	// get genre via id
    	// getGenre(book) {
    	// 	let genreName;
    	// 	for (const genre of this.genres) {
    	// 		if (+book.genreId === +genre.id) {
    	// 			genreName = genre.name;
    	// 		}
    	// 	}
    	// 	return genreName;
    	// },

    	// // get author via id
    	// getAuthor(book) {
    	// 	let authorName;
    	// 	this.authors.forEach((author) => {
    	// 		if (+book.authorId === +author.id) {
    	// 			authorName = author.name;
    	// 		}
    	// 	});
    	// 	return authorName;
    	// },

    	// delete a book
    	// deleteBook(bookId) {
    	// 	this.$store.dispatch("book/deleteBook", bookId)
     //            .then((err) => {
     //                if (err) {
     //                    console.log(err);
     //                } else {
     //                    console.log("Delete successful");
     //                }
     //            });
    	// }
    },

    // mounted() {
    //     this.$store.dispatch("book/loadBooks")
    //         .then((err) => {
    //             if (err) {console.log(err)}
    //             else {console.log("load successful")}
    //         })
    //         .catch(err => console.log("err from mounted", err));
    // }
};
</script>

<style scoped>
.badge{
	cursor: pointer;
}
</style>