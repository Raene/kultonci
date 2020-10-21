<template>
    <div class="col-md-12 my-4">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">User List</h5>
                <p class="card-text">There are currently {{ userCount }} users</p>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verified Status</th>
                            <th>Delete User</th>
                            <!-- <th>Date</th> -->
                            <!-- <th>Status</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.userId }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.userEmail }}</td>
                            <td><router-link :to="'/dashboard/users/' + user.userId"><span :class="{ badge: true, 'badge-pill': true, 'badge-danger': user.userVerified === 0, 'badge-success': user.userVerified === 0 }">{{ user.userVerified === 0? "Verify User":"Verified" }}</span></router-link></td>
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
	computed: {
        users() {
            return this.$store.getters['user/getUsers'];
        },

        userCount() {
        	return this.$store.getters['user/getUserCount'];
        }
    },

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

    mounted() {
        this.$store.dispatch("user/getUsers")
            .then((err) => {
                if (err) {console.log(err)}
                else {console.log("load successful")}
            })
            .catch(err => console.log("err from mounted", err));
    }
};
</script>

<style scoped>
.badge{
	cursor: pointer;
}
</style>