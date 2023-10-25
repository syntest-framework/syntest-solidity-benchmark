const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringL9DK33D = "n3VATwDYkFrpOuSYka6fu2FlYJ1Dj3YHcDq9JsvF6FI27ikOYpKP5C2xwvf5FIBqcoVKBc5K5gKyN"
		const stringQzz0v1c = "OoUtiNRwfZuQbtdXp6QmOI74cizf9intwhOwcUZuyRinfHePvmHTumAi9v"
		const uints55ONFl = BigInt("1293")
		const DipexOrQNdJ8 = await Dipex.new(stringL9DK33D, stringQzz0v1c, uints55ONFl, {from: accounts[3]});
		const uintl4sX406 = BigInt("862")
		const addressDVpCprU = accounts[1]
		const uintPQJiwY = BigInt("41")
		const addressErX1Yo3 = accounts[0]
		const boolsebwW3h = await DipexOrQNdJ8.approveAndCall.call(addressDVpCprU, uintl4sX406, {from: accounts[5]});
		const bool3sLfIf = await DipexOrQNdJ8.transfer.call(addressErX1Yo3, uintPQJiwY, {from: accounts[0]});

		await expect(DipexOrQNdJ8.approveAndCall.call(addressDVpCprU, uintl4sX406, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string3NRNDB = "w4LzzzwWVr79NyrKmvwkAADxG3xTB"
		const stringtSEIakC = "NkgtISenEHuwAHhiMS8XAOE"
		const uintHHonlk = BigInt("1564")
		const DipexQGKJfwh = await Dipex.new(string3NRNDB, stringtSEIakC, uintHHonlk, {from: accounts[2]});
		const uintWd7pZJv = BigInt("639")
		const addressfbVkx0M = accounts[0]
		const addressmXlrj2x = "0x0000000000000000000000000000000000000001"
		const uintAK36CDz = BigInt("2004")
		const addressUmFpRuV = accounts[4]
		const addressr9WdTMA = accounts[2]
		const uintA7DOxdw = BigInt("581")
		const addressbDMfk4c = accounts[1]
		const boolWeiNFeI = await DipexQGKJfwh.transferFrom.call(addressmXlrj2x, addressfbVkx0M, uintWd7pZJv, {from: accounts[3]});
		const boolRexeSUN = await DipexQGKJfwh.transferFrom.call(addressr9WdTMA, addressUmFpRuV, uintAK36CDz, {from: accounts[1]});
		const boolA55Z0JF = await DipexQGKJfwh.approveAndCall.call(addressbDMfk4c, uintA7DOxdw, {from: accounts[1]});

		await expect(DipexQGKJfwh.transferFrom.call(addressmXlrj2x, addressfbVkx0M, uintWd7pZJv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringKQZgvO = "huSaMYq1zAk4MtKqhBeR4Spt0HrFk5km27nOHPU5nwglaqDsmUq7vm45QzZxntcvRO42IQMCxnPaVn7xY1pp0"
		const stringpUeeyOm = "sz9wlWDOcM1lwGrE5hhOXhUGyuTqQsfk2DisDn3PxSGgdoGKyASN2jfYtXWvnG0QiBvAOzviVbR030jTi1ubnwz4KJ5Hncobf"
		const uintPpEuowz = BigInt("135")
		const DipexEOdgfn4 = await Dipex.new(stringKQZgvO, stringpUeeyOm, uintPpEuowz, {from: accounts[2]});
		const uintW2CQ0IZ = BigInt("1607")
		const addresshrO9hv = accounts[4]
		const uintke0vWnY = BigInt("1454")
		const addressRX7jQmW = accounts[4]
		const uintZroGRiB = BigInt("350")
		const addressB1R3L4H = accounts[2]
		const uintayIu7JW = BigInt("1543")
		const addresss9KdEU = accounts[4]
		const addressSD0PrQI = accounts[0]
		const boolLby4te = await DipexEOdgfn4.approve.call(addresshrO9hv, uintW2CQ0IZ, {from: accounts[2]});
		const boolfRcD9Ho = await DipexEOdgfn4.approve.call(addressRX7jQmW, uintke0vWnY, {from: accounts[4]});
		const boolXrCgYth = await DipexEOdgfn4.approve.call(addressB1R3L4H, uintZroGRiB, {from: accounts[5]});
		const boola7jDtxz = await DipexEOdgfn4.transferFrom.call(addressSD0PrQI, addresss9KdEU, uintayIu7JW, {from: accounts[1]});

		assert.equal(boolLby4te, true)
		assert.equal(boolXrCgYth, true)
		assert.equal(boolfRcD9Ho, true)
		await expect(DipexEOdgfn4.transferFrom.call(addressSD0PrQI, addresss9KdEU, uintayIu7JW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string28HUu5 = "ekslLTU284y17iRvXnMfEqgv5REAUXxWRhuOjBqvPnJvAqnuLkJahAxI31HivHGmmMttWnLRA"
		const string3In3m9 = "G6G4QROHRNge2UJruBxbx0cesf7klwemWKFM7"
		const uintQbj8RNt = BigInt("1365")
		const DipexSMdmuZB = await Dipex.new(string28HUu5, string3In3m9, uintQbj8RNt, {from: accounts[1]});
		const uintWgnbeXJ = BigInt("1641")
		const addressIuTtQSk = accounts[1]
		const uintJ0ZUN4Q = BigInt("587")
		const addressSVOoGvL = accounts[3]
		const uintQgeCrQ = BigInt("2017")
		const addressuBfvcyw = accounts[3]
		const uintsiAznhE = BigInt("741")
		const addressSMZKzc5 = accounts[0]
		const uintEgIdGt5 = BigInt("1806")
		const addressVUKxi2M = accounts[0]
		const boolWtfrVdK = await DipexSMdmuZB.approve.call(addressIuTtQSk, uintWgnbeXJ, {from: accounts[4]});
		const boolC7IDTxu = await DipexSMdmuZB.approve.call(addressSVOoGvL, uintJ0ZUN4Q, {from: accounts[1]});
		const boolRukgt6 = await DipexSMdmuZB.approve.call(addressuBfvcyw, uintQgeCrQ, {from: "0x0000000000000000000000000000000000000001"});
		const booldz62JYJ = await DipexSMdmuZB.approve.call(addressSMZKzc5, uintsiAznhE, {from: accounts[2]});
		const boolDkzd8a5 = await DipexSMdmuZB.approveAndCall.call(addressVUKxi2M, uintEgIdGt5, {from: accounts[1]});

		assert.equal(boolC7IDTxu, true)
		assert.equal(boolDkzd8a5, true)
		assert.equal(boolRukgt6, true)
		assert.equal(boolWtfrVdK, true)
		assert.equal(booldz62JYJ, true)
	});

	it('test for Dipex', async () => {
		const stringgNrXWa5 = "XUatsxW3zUx2aOTfqiriuhAnBYXNDjHUJQD2x2CUaqhvVbh5amv7YU2XlYdvqVXLURWpIwud8sbtbtQJRbs9L9VzihLL"
		const stringxOGgR2X = "7G7TLSCpAMvyW76RAM6pRUQJkY9B7J3znLgNrQmb7fKCSXFA3aCW1UFnNUFHNuVEzR"
		const uintjJNgDyN = BigInt("1199")
		const DipexBQyfxtA = await Dipex.new(stringgNrXWa5, stringxOGgR2X, uintjJNgDyN, {from: accounts[5]});
		const uintkCmy9md = BigInt("289")
		const addressgx9Fxv = accounts[1]
		const uintMcrHWkf = BigInt("999")
		const addressCqVZDCa = accounts[3]
		const addressDAD7jg = accounts[2]
		const boolyoRNwrh = await DipexBQyfxtA.approveAndCall.call(addressgx9Fxv, uintkCmy9md, {from: accounts[5]});
		const boolLQlurfc = await DipexBQyfxtA.approve.call(addressCqVZDCa, uintMcrHWkf, {from: accounts[1]});
		const boolxzNM32J = await DipexBQyfxtA.transferownership.call(addressDAD7jg, {from: accounts[1]});

		assert.equal(boolLQlurfc, true)
		assert.equal(boolyoRNwrh, true)
		await expect(DipexBQyfxtA.transferownership.call(addressDAD7jg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringgNrXWa5 = "XUatsxW3zUx2aOTfqiriuhAnBYXNDjHUJQD2x2CUaqhvVbh5amv7YU2XlYdvqVXLURWpIwud8sbtbtQJRbs9L9VzihLL"
		const stringxOGgR2X = "7G7TLSCpAMvyW76RAM6pRUQJkY9B7J3znLgNrQmb7fKCSXFA3aCW1UFnNUFHNuVEzR"
		const uintuom9LNi = BigInt("1199")
		const DipexBQyfxtA = await Dipex.new(stringgNrXWa5, stringxOGgR2X, uintuom9LNi, {from: accounts[5]});
		const uintNbp8PCa = BigInt("1555")
		const addressq2tkosf = accounts[2]
		const addressPIMKbFg = accounts[0]
		const uintAo3noeI = BigInt("1002")
		const addressy6jyTOw = accounts[3]
		const boolzhDy5cH = await DipexBQyfxtA.transferFrom.call(addressPIMKbFg, addressq2tkosf, uintNbp8PCa, {from: accounts[0]});
		const boolLQlurfc = await DipexBQyfxtA.approve.call(addressy6jyTOw, uintAo3noeI, {from: accounts[1]});

		await expect(DipexBQyfxtA.transferFrom.call(addressPIMKbFg, addressq2tkosf, uintNbp8PCa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringgNrXWa5 = "XUatsxW3zUx2aOTfqiriuhAnBYXNDjHUJQD2x2CUaqhvVbh5amv7YU2XlYdvqVXLURWpIwud8sbtbtQJRbs9L9VzihLL"
		const stringxOGgR2X = "7G7TLSCpAMvyW76RAM6pRUQJkY9B7J3znLgNrQmb7fKCSXFA3aCW1UFnNUFHNuVEzR"
		const uint12kiGa = BigInt("1199")
		const DipexBQyfxtA = await Dipex.new(stringgNrXWa5, stringxOGgR2X, uint12kiGa, {from: accounts[5]});
		const uintonasD5s = BigInt("127")
		const addressvHSifk9 = accounts[4]
		const uintoqNjwsG = BigInt("999")
		const addressP4yraiN = accounts[3]
		const boolnO3TGt0 = await DipexBQyfxtA.transfer.call(addressvHSifk9, uintonasD5s, {from: accounts[3]});
		const boolLQlurfc = await DipexBQyfxtA.approve.call(addressP4yraiN, uintoqNjwsG, {from: accounts[1]});

		await expect(DipexBQyfxtA.transfer.call(addressvHSifk9, uintonasD5s, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringgNrXWa5 = "XUatsxW3zUx2aOTfqiriuhAnBYXNDjHUJQD2x2CUaqhvVbh5amv7YU2XlYdvqVXLURWpIwud8sbtbtQJRbs9L9VzihLL"
		const stringxOGgR2X = "7G7TLSCpAMvyW76RAM6pRUQJkY9B7J3znLgNrQmb7fKCSXFA3aCW1UFnNUFHNuVEzR"
		const uintjAuNpoK = BigInt("1199")
		const DipexBQyfxtA = await Dipex.new(stringgNrXWa5, stringxOGgR2X, uintjAuNpoK, {from: accounts[5]});
		const uintuFWRgAO = BigInt("289")
		const addressvaLj3We = accounts[1]
		const uintWpCcq3V = BigInt("1498")
		const addressC4eEOBW = accounts[5]
		const uintnyyFjrS = BigInt("999")
		const addressqfiIEJ2 = accounts[3]
		const boolyoRNwrh = await DipexBQyfxtA.approveAndCall.call(addressvaLj3We, uintuFWRgAO, {from: accounts[5]});
		const booltjjSp65 = await DipexBQyfxtA.transfer.call(addressC4eEOBW, uintWpCcq3V, {from: accounts[4]});
		const boolLQlurfc = await DipexBQyfxtA.approve.call(addressqfiIEJ2, uintnyyFjrS, {from: accounts[1]});

		assert.equal(boolyoRNwrh, true)
		await expect(DipexBQyfxtA.transfer.call(addressC4eEOBW, uintWpCcq3V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringnAoAdlN = "Bqu57hz0hliKEnrJoDymKxn"
		const stringzvxGLQr = "x1HiPAw4VSL2zRC"
		const uintt1ZSNRL = BigInt("1012")
		const Dipex80Uxgk = await Dipex.new(stringnAoAdlN, stringzvxGLQr, uintt1ZSNRL, {from: "0x0000000000000000000000000000000000000001"});
		const addressB33ZVRZ = accounts[1]
		const uintr7HD4gR = BigInt("1524")
		const addressgrmsZJM = accounts[3]
		const uintsaK3wiP = BigInt("169")
		const addressZ3aonDz = accounts[1]
		const addressKmAjto3 = "0x0000000000000000000000000000000000000001"
		const uintzLZ1YFD = BigInt("1372")
		const addressxKuKq4q = accounts[1]
		const addressQaqLWo7 = accounts[4]
		const uintRSPRduh = BigInt("1823")
		const addresse8fbw9h = accounts[1]
		const addressvreCJgx = accounts[3]
		const uintbZ4jHSj = BigInt("466")
		const addressw4vAEoi = accounts[3]
		const boolOTs5P7K = await Dipex80Uxgk.transferownership.call(addressB33ZVRZ, {from: accounts[4]});
		const boolocEgklG = await Dipex80Uxgk.approveAndCall.call(addressgrmsZJM, uintr7HD4gR, {from: accounts[3]});
		const boolnz1jPfF = await Dipex80Uxgk.transferFrom.call(addressKmAjto3, addressZ3aonDz, uintsaK3wiP, {from: accounts[0]});
		const boolIcb6N9W = await Dipex80Uxgk.transferFrom.call(addressQaqLWo7, addressxKuKq4q, uintzLZ1YFD, {from: accounts[2]});
		const boolMnbtPlq = await Dipex80Uxgk.transferFrom.call(addressvreCJgx, addresse8fbw9h, uintRSPRduh, {from: accounts[1]});
		const boolxSUOqZK = await Dipex80Uxgk.approveAndCall.call(addressw4vAEoi, uintbZ4jHSj, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringO6FH8od = "JLIXUQyIn6yixFnYHMuy2EC41"
		const stringZX5UrA3 = "gi4Qh5M0Rwky3hO70EVzoNFN9h6a4o8Pj6f"
		const uintkpVhIF5 = BigInt("414")
		const Dipexq4RE1Ku = await Dipex.new(stringO6FH8od, stringZX5UrA3, uintkpVhIF5, {from: accounts[0]});
		const uintq6JjkQQ = BigInt("0")
		const addresshWSJkwK = accounts[0]
		const addresslH3XAqh = accounts[0]
		const boolUMp5kdy = await Dipexq4RE1Ku.transferFrom.call(addresslH3XAqh, addresshWSJkwK, uintq6JjkQQ, {from: accounts[3]});

		assert.equal(boolUMp5kdy, true)
	});

	it('test for Dipex', async () => {
		const stringgNrXWa5 = "XUatsxW3zUx2aOTfqiriuhAnBYXNDjHUJQD2x2CUaqhvVbh5amv7YU2XlYdvqVXLURWpIwud8sbtbtQJRbs9L9VzihLL"
		const stringxOGgR2X = "7G7TLSCpAMvyW76RAM6pRUQJkY9B7J3znLgNrQmb7fKCSXFA3aCW1UFnNUFHNuVEzR"
		const uintYqJcgb4 = BigInt("1199")
		const DipexBQyfxtA = await Dipex.new(stringgNrXWa5, stringxOGgR2X, uintYqJcgb4, {from: accounts[5]});
		const addresso33jSy = accounts[2]
		const uintfsNjBFJ = BigInt("273")
		const addressN2zLo0 = accounts[2]
		const uintQJ3bmM5 = BigInt("173")
		const addressMx3lAAY = accounts[3]
		const addressoIOq9n = accounts[2]
		const uintpjYTwwi = BigInt("1057")
		const addressCf6EGzb = accounts[1]
		const addressrSjUB9A = accounts[2]
		const boolBg4LxxO = await DipexBQyfxtA.transferownership.call(addresso33jSy, {from: accounts[5]});
		const boolyoRNwrh = await DipexBQyfxtA.approveAndCall.call(addressN2zLo0, uintfsNjBFJ, {from: accounts[5]});
		const boolkmZwMsi = await DipexBQyfxtA.transferFrom.call(addressoIOq9n, addressMx3lAAY, uintQJ3bmM5, {from: accounts[0]});
		const boolBdjA4M = await DipexBQyfxtA.transferFrom.call(addressrSjUB9A, addressCf6EGzb, uintpjYTwwi, {from: accounts[0]});

		assert.equal(boolBg4LxxO, true)
		assert.equal(boolyoRNwrh, true)
		await expect(DipexBQyfxtA.transferFrom.call(addressoIOq9n, addressMx3lAAY, uintQJ3bmM5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringgNrXWa5 = "XUatsxW3zUx2aOTfqiriuhAnBYXNDjHUJQD2x2CUaqhvVbh5amv7YU2XlYdvqVXLURWpIwud8sbtbtQJRbs9L9VzihLL"
		const stringxOGgR2X = "7G7TLSCpAMvyW76RAM6pRUQJkY9B7J3znLgNrQmb7fKCSXFA3aCW1UFnNUFHNuVEzR"
		const uintwonZQZl = BigInt("1199")
		const DipexBQyfxtA = await Dipex.new(stringgNrXWa5, stringxOGgR2X, uintwonZQZl, {from: accounts[5]});
		const uintuIwyTG = BigInt("0")
		const addressWlDrDMP = accounts[1]
		const uintPY9Tu3B = BigInt("1057")
		const addressYy9vjN9 = accounts[1]
		const addressEbniqjF = accounts[4]
		const uintN4c9oQq = BigInt("1440")
		const addressgw1uko = accounts[4]
		const addressume124A = accounts[3]
		const uint1BgLRG = BigInt("1973")
		const address8j8qrz = "0x0000000000000000000000000000000000000001"
		const uintTxk4T5L = BigInt("743")
		const addressBt5CKsp = accounts[0]
		const addressYcraRmA = accounts[2]
		const uintqtPmUIg = BigInt("1335")
		const addresspN4Fn5E = accounts[3]
		const addressvsx4wxh = accounts[1]
		const uintYJPvSyB = BigInt("1868")
		const addressmsslTWq = accounts[5]
		const addressd2HB7cG = accounts[5]
		const boolyoRNwrh = await DipexBQyfxtA.approveAndCall.call(addressWlDrDMP, uintuIwyTG, {from: accounts[5]});
		const boolBdjA4M = await DipexBQyfxtA.transferFrom.call(addressEbniqjF, addressYy9vjN9, uintPY9Tu3B, {from: accounts[0]});
		const boolWMHEDt = await DipexBQyfxtA.transferFrom.call(addressume124A, addressgw1uko, uintN4c9oQq, {from: accounts[0]});
		const boollMt7Rp9 = await DipexBQyfxtA.approveAndCall.call(address8j8qrz, uint1BgLRG, {from: "0x0000000000000000000000000000000000000001"});
		const boolFSd5lD = await DipexBQyfxtA.transferFrom.call(addressYcraRmA, addressBt5CKsp, uintTxk4T5L, {from: accounts[1]});
		const boolndooSYf = await DipexBQyfxtA.approve.call(addresspN4Fn5E, uintqtPmUIg, {from: accounts[4]});
		const booljLx9tx2 = await DipexBQyfxtA.transferownership.call(addressvsx4wxh, {from: accounts[4]});
		const boolk6GFj2 = await DipexBQyfxtA.approveAndCall.call(addressmsslTWq, uintYJPvSyB, {from: accounts[0]});
		const boolHEJLG7 = await DipexBQyfxtA.transferownership.call(addressd2HB7cG, {from: accounts[4]});

		assert.equal(boolyoRNwrh, true)
		await expect(DipexBQyfxtA.transferFrom.call(addressEbniqjF, addressYy9vjN9, uintPY9Tu3B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})