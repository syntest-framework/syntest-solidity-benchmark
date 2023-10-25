const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringiungww9 = "4HneShYGNgm8CYMxQ9hdysjJjIiX71O9h3eflgV4D"
		const stringoCNoaBs = "YFrJLzna0w6GRVLKvzruf4dhzT2wlv5s14IMCpynJH7hdLokgdowFnG1RVmkAhMQsshkvCs4MhU9qj21awx"
		const uinta4OXkg7 = BigInt("177")
		const RexonayBQNrYh = await Rexona.new(stringiungww9, stringoCNoaBs, uinta4OXkg7, {from: accounts[0]});
		const uintEUxaasS = BigInt("704")
		const addressOowvE1U = accounts[2]
		const uintzv6ueea = BigInt("464")
		const addressmRc4xqh = accounts[4]
		const address3sFmpD = accounts[1]
		const uintKhy1vRd = BigInt("752")
		const addressQPUzSU1 = accounts[2]
		const uintETmhYie = BigInt("1977")
		const addressaoDB2H = accounts[2]
		const uintrquIpkE = BigInt("704")
		const addressMz0UxWV = accounts[0]
		const addressT0dHj4W = accounts[2]
		const uintFn57os1 = BigInt("2024")
		const addressc6omQn = accounts[3]
		const boolXxSqhjG = await RexonayBQNrYh.approveAndCall.call(addressOowvE1U, uintEUxaasS, {from: accounts[5]});
		const boolzVI6urm = await RexonayBQNrYh.transferFrom.call(address3sFmpD, addressmRc4xqh, uintzv6ueea, {from: accounts[1]});
		const boolcbc6iUH = await RexonayBQNrYh.approveAndCall.call(addressQPUzSU1, uintKhy1vRd, {from: accounts[0]});
		const boolnbcTV9F = await RexonayBQNrYh.approveAndCall.call(addressaoDB2H, uintETmhYie, {from: accounts[4]});
		const boolGhC55yj = await RexonayBQNrYh.transferFrom.call(addressT0dHj4W, addressMz0UxWV, uintrquIpkE, {from: "0x0000000000000000000000000000000000000001"});
		const boolCbr7v3d = await RexonayBQNrYh.approve.call(addressc6omQn, uintFn57os1, {from: accounts[3]});

		await expect(RexonayBQNrYh.approveAndCall.call(addressOowvE1U, uintEUxaasS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringc0sUrbf = "LxVKMmDtBBJMsfBWygNt9SQJmaGpkmV3rqrxl3wL9CRqHHtpiBiYyv5OnpF2rVYwrd7d5XexvnYapvvs3mNV"
		const stringA8oR2Gd = "T1YNbKgDF9e6gLtBtSuGKdrHvRMWexpYyBizygJodyS8vuC7OJenNhU7FVh21onKBw6bf0yJ"
		const uintJxZLrep = BigInt("1962")
		const RexonayMe2cL8 = await Rexona.new(stringc0sUrbf, stringA8oR2Gd, uintJxZLrep, {from: accounts[0]});
		const uintJUCjoH = BigInt("574")
		const addressrXnLQ8R = accounts[4]
		const uintOUyuem = BigInt("818")
		const addressSJ1kgb7 = accounts[0]
		const boolbLHQhZ8 = await RexonayMe2cL8.approve.call(addressrXnLQ8R, uintJUCjoH, {from: accounts[4]});
		const boolmx1d0tj = await RexonayMe2cL8.transfer.call(addressSJ1kgb7, uintOUyuem, {from: accounts[1]});

		assert.equal(boolbLHQhZ8, true)
		await expect(RexonayMe2cL8.transfer.call(addressSJ1kgb7, uintOUyuem, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringWmnbWSD = "X5865oOmibc5mlJL8f4Po"
		const stringVGIK83V = "acfKjglHls7Xxvbt1Dttb4wo0PezeOF63MH8PnArqzQWkuJedX5uyUsXjaQvgTKnWUcAbmBACne1Pr6K16z"
		const uintsgBLVI = BigInt("1460")
		const Rexonaf6vmyVc = await Rexona.new(stringWmnbWSD, stringVGIK83V, uintsgBLVI, {from: accounts[4]});
		const uintdBPULon = BigInt("177")
		const addressRP2nlWK = accounts[3]
		const addresso8ETx7H = accounts[3]
		const uintMhMbkLs = BigInt("789")
		const addressUqU8Gea = accounts[2]
		const uintFtYI87 = BigInt("1011")
		const addressFY6atOn = accounts[0]
		const uintlphFr1g = BigInt("1017")
		const addresslZrrrEK = accounts[3]
		const boolfLwhZRt = await Rexonaf6vmyVc.transferFrom.call(addresso8ETx7H, addressRP2nlWK, uintdBPULon, {from: accounts[2]});
		const boolU8loNRc = await Rexonaf6vmyVc.approve.call(addressUqU8Gea, uintMhMbkLs, {from: accounts[1]});
		const booltD8j8NW = await Rexonaf6vmyVc.approveAndCall.call(addressFY6atOn, uintFtYI87, {from: accounts[4]});
		const boolqqD2d7k = await Rexonaf6vmyVc.approve.call(addresslZrrrEK, uintlphFr1g, {from: accounts[3]});

		await expect(Rexonaf6vmyVc.transferFrom.call(addresso8ETx7H, addressRP2nlWK, uintdBPULon, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringBkunHHT = "L3mtIaIlU8OWXI8tYUb9jlP1ADisU1eYuqmJZ5DJx8BnEKKdMO1YaJ3QK7EkkbUWuxREbA166sJMdSXcwnHPaXv"
		const stringla96jlH = "R1e5rk1xfkQ4PoBsqUPjPmMYwIIGvUjK"
		const uintnOXCxFP = BigInt("1451")
		const RexonaHLHF56 = await Rexona.new(stringBkunHHT, stringla96jlH, uintnOXCxFP, {from: accounts[2]});
		const uintrhTL6I = BigInt("497")
		const addressyr8t03v = accounts[5]
		const uintuPduqEw = BigInt("354")
		const addressyDR1o97 = accounts[5]
		const uintsLxofk = BigInt("1256")
		const addressNMC9BIA = accounts[0]
		const addressxQSrJ8W = accounts[5]
		const uintorXJ2p = BigInt("1040")
		const addressUYqJbfW = accounts[4]
		const boolbQnHulw = await RexonaHLHF56.approve.call(addressyr8t03v, uintrhTL6I, {from: accounts[0]});
		const boolqb4cuRb = await RexonaHLHF56.approve.call(addressyDR1o97, uintuPduqEw, {from: accounts[3]});
		const boolyadAm1w = await RexonaHLHF56.approve.call(addressNMC9BIA, uintsLxofk, {from: accounts[0]});
		const boolYvD0Lxr = await RexonaHLHF56.transferownership.call(addressxQSrJ8W, {from: accounts[1]});
		const boolUoYebn7 = await RexonaHLHF56.approve.call(addressUYqJbfW, uintorXJ2p, {from: accounts[4]});

		assert.equal(boolbQnHulw, true)
		assert.equal(boolqb4cuRb, true)
		assert.equal(boolyadAm1w, true)
		await expect(RexonaHLHF56.transferownership.call(addressxQSrJ8W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringc0sUrbf = "LxVKMmDtBBJMsfBWygNt9SQJmaGpkmV3rqrxl3wL9CRqHHtpiBiYyv5OnpF2rVYwrd7d5XexvnYapvvs3mNV"
		const stringA8oR2Gd = "T1YNbKgDF9e6gLtBtSuGKdrHvRMWexpYyBizygJodyS8vuC7OJenNhU7FVh21onKBw6bf0yJ"
		const uintxQ7zbAu = BigInt("1962")
		const RexonayMe2cL8 = await Rexona.new(stringc0sUrbf, stringA8oR2Gd, uintxQ7zbAu, {from: accounts[0]});
		const uintrb8v5yU = BigInt("574")
		const addressR8L7XZ2 = accounts[4]
		const uintGjIngG1 = BigInt("1363")
		const addressSRF8N8w = accounts[1]
		const addressofGgIQC = accounts[3]
		const uintHRqvjv6 = BigInt("818")
		const addressAOZYcsi = accounts[0]
		const boolbLHQhZ8 = await RexonayMe2cL8.approve.call(addressR8L7XZ2, uintrb8v5yU, {from: accounts[4]});
		const boolQAHLoKB = await RexonayMe2cL8.transferFrom.call(addressofGgIQC, addressSRF8N8w, uintGjIngG1, {from: accounts[3]});
		const boolmx1d0tj = await RexonayMe2cL8.transfer.call(addressAOZYcsi, uintHRqvjv6, {from: accounts[1]});

		assert.equal(boolbLHQhZ8, true)
		await expect(RexonayMe2cL8.transferFrom.call(addressofGgIQC, addressSRF8N8w, uintGjIngG1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringc0sUrbf = "LxVKMmDtBBJMsfBWygNt9SQJmaGpkmV3rqrxl3wL9CRqHHtpiBiYyv5OnpF2rVYwrd7d5XexvnYapvvs3mNV"
		const stringA8oR2Gd = "T1YNbKgDF9e6gLtBtSuGKdrHvRMWexpYyBizygJodyS8vuC7OJenNhU7FVh21onKBw6bf0yJ"
		const uintYtFisGG = BigInt("1962")
		const RexonayMe2cL8 = await Rexona.new(stringc0sUrbf, stringA8oR2Gd, uintYtFisGG, {from: accounts[0]});
		const uintm7bQROC = BigInt("574")
		const addressV0HASsQ = accounts[5]
		const addressSisbdV3 = "0x0000000000000000000000000000000000000001"
		const boolbLHQhZ8 = await RexonayMe2cL8.approve.call(addressV0HASsQ, uintm7bQROC, {from: accounts[4]});
		const boolo9CeX0k = await RexonayMe2cL8.transferownership.call(addressSisbdV3, {from: accounts[0]});

		assert.equal(boolbLHQhZ8, true)
		assert.equal(boolo9CeX0k, true)
	});

	it('test for Rexona', async () => {
		const stringHKhqJmK = ""
		const stringZ7VR2Tt = "efqWQI8"
		const uintd7EeKfH = BigInt("1147")
		const RexonaahilFvl = await Rexona.new(stringHKhqJmK, stringZ7VR2Tt, uintd7EeKfH, {from: accounts[3]});
		const uintdipgbm = BigInt("475")
		const addressObRthvm = accounts[1]
		const uintXjmMYa = BigInt("1216")
		const addressLtiyMTN = accounts[2]
		const uintHJo8XAj = BigInt("7")
		const addressT4QzeYV = accounts[3]
		const addressyFG3YRl = accounts[1]
		const boolMvI2RV = await RexonaahilFvl.approveAndCall.call(addressObRthvm, uintdipgbm, {from: accounts[3]});
		const boolNVMcG4 = await RexonaahilFvl.approveAndCall.call(addressLtiyMTN, uintXjmMYa, {from: accounts[2]});
		const boolockmyg = await RexonaahilFvl.transferFrom.call(addressyFG3YRl, addressT4QzeYV, uintHJo8XAj, {from: accounts[1]});

		assert.equal(boolMvI2RV, true)
		await expect(RexonaahilFvl.approveAndCall.call(addressLtiyMTN, uintXjmMYa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOaCZGif = "12METfLbGWhI1T7Ws999vTCbDzO6UJBVxRzPFMOsWaSMpUW8mWMme"
		const stringFt37lBb = "l5veSXDhIimmsTVOkIMTjykdWe1skEkNwnCQdVqs2x3ZTkmBhROChi1rRugDYbwWao73MvLDU6igCP"
		const uintVoII80w = BigInt("771")
		const Rexonautu16QP = await Rexona.new(stringOaCZGif, stringFt37lBb, uintVoII80w, {from: "0x0000000000000000000000000000000000000001"});
		const uintnU9qEd = BigInt("2029")
		const addressHpv8I1B = accounts[0]
		const uintk8gkSpR = BigInt("992")
		const addressvtpr5J8 = accounts[5]
		const uintWrn1eY = BigInt("524")
		const addressaIAuGth = accounts[1]
		const addressu1URT0s = accounts[1]
		const addressBpvcbdy = accounts[2]
		const uintKfoRT9I = BigInt("1041")
		const addressy4zWcsn = accounts[2]
		const addressfcyICc = accounts[4]
		const boolZfXNiO = await Rexonautu16QP.approveAndCall.call(addressHpv8I1B, uintnU9qEd, {from: accounts[5]});
		const boolAn104eD = await Rexonautu16QP.approve.call(addressvtpr5J8, uintk8gkSpR, {from: accounts[0]});
		const boolI8HgLP = await Rexonautu16QP.transferFrom.call(addressu1URT0s, addressaIAuGth, uintWrn1eY, {from: accounts[0]});
		const boolm8DwwMH = await Rexonautu16QP.transferownership.call(addressBpvcbdy, {from: accounts[2]});
		const boolT8LIAdv = await Rexonautu16QP.transferFrom.call(addressfcyICc, addressy4zWcsn, uintKfoRT9I, {from: accounts[0]});
	});

	it('test for Rexona', async () => {
		const stringHKhqJmK = ""
		const stringZ7VR2Tt = "efqWQI8"
		const uintKEinzwi = BigInt("1147")
		const RexonaahilFvl = await Rexona.new(stringHKhqJmK, stringZ7VR2Tt, uintKEinzwi, {from: accounts[3]});
		const uintniM2e2b = BigInt("0")
		const addressL4352fs = accounts[3]
		const addressFbIzNX6 = accounts[0]
		const uintnjZ5dG9 = BigInt("834")
		const addressRa9jDUi = accounts[4]
		const addressFa9cXFG = accounts[2]
		const boolockmyg = await RexonaahilFvl.transferFrom.call(addressFbIzNX6, addressL4352fs, uintniM2e2b, {from: accounts[1]});
		const boolVrXyA4a = await RexonaahilFvl.transferFrom.call(addressFa9cXFG, addressRa9jDUi, uintnjZ5dG9, {from: accounts[4]});

		assert.equal(boolockmyg, true)
		await expect(RexonaahilFvl.transferFrom.call(addressFa9cXFG, addressRa9jDUi, uintnjZ5dG9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringBVkxU5y = "5QUpLrG8Ez6qZJ8YV6lqN3fsGu1via8byJ2gQ6fxpHDJMefRUmgGWAK1B6eqletmQpU3jo10y5fl6waGduzURwoBnO5"
		const stringdR8ivWv = "0At62LWMnB09MWgLb56cOJp8JskscI4zSgUfhyzQIuEe8TOptaUrXs76bPamAYV9ECqENcFefCbFJ"
		const uintaV8kEv = BigInt("89")
		const RexonaGHFhBr6 = await Rexona.new(stringBVkxU5y, stringdR8ivWv, uintaV8kEv, {from: accounts[4]});
		const uintU9y1fr = BigInt("0")
		const addressKuyZW4v = accounts[2]
		const uintc3j233o = BigInt("1785")
		const addressZc3hM2A = accounts[4]
		const addresskPHlZC = accounts[3]
		const uintRO41RcJ = BigInt("846")
		const addressA90PE4m = accounts[1]
		const addressgcwb9j = accounts[3]
		const uintKp1mJaH = BigInt("895")
		const addresszFgF5Hk = accounts[1]
		const boolGjhsNxz = await RexonaGHFhBr6.approveAndCall.call(addressKuyZW4v, uintU9y1fr, {from: accounts[4]});
		const boolMyfl8HZ = await RexonaGHFhBr6.transferFrom.call(addresskPHlZC, addressZc3hM2A, uintc3j233o, {from: accounts[4]});
		const boolSCpFD7X = await RexonaGHFhBr6.transferFrom.call(addressgcwb9j, addressA90PE4m, uintRO41RcJ, {from: accounts[1]});
		const boolfVsdtua = await RexonaGHFhBr6.transfer.call(addresszFgF5Hk, uintKp1mJaH, {from: accounts[3]});

		assert.equal(boolGjhsNxz, true)
		await expect(RexonaGHFhBr6.transferFrom.call(addresskPHlZC, addressZc3hM2A, uintc3j233o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})