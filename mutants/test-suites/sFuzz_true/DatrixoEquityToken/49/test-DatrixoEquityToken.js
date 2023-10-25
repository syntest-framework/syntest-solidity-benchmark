const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressxzqg8OZ = accounts[0]
		const uintbOYQPlh = BigInt("953")
		const DatrixoEquityTokenI3hK9uE = await DatrixoEquityToken.new(addressxzqg8OZ, uintbOYQPlh, {from: accounts[2]});
		const uintc2BhVEx = BigInt("1324")
		const addresswg3ch1E = accounts[3]
		const addressBZhoJSs = accounts[2]
		const uintgeRFvTW = BigInt("812")
		const addressTyqpkit = accounts[0]
		const addressyJH6XSX = accounts[0]
		const addresswm9UBY7 = accounts[1]
//		const boolnsDaQkv = await DatrixoEquityTokenI3hK9uE.transferFrom.call(addressBZhoJSs, addresswg3ch1E, uintc2BhVEx, {from: accounts[3]});
//		const boolIJBkPMS = await DatrixoEquityTokenI3hK9uE.transfer.call(addressTyqpkit, uintgeRFvTW, {from: accounts[1]});
//		const boolLmBHMKS = await DatrixoEquityTokenI3hK9uE.removeShareholder.call(addressyJH6XSX, {from: accounts[1]});
//		await DatrixoEquityTokenI3hK9uE.afterStartTime.call({from: accounts[2]});
//		const boolOVMuCx3 = await DatrixoEquityTokenI3hK9uE.removeShareholder.call(addresswm9UBY7, {from: accounts[1]});

		await expect(DatrixoEquityTokenI3hK9uE.transferFrom.call(addressBZhoJSs, addresswg3ch1E, uintc2BhVEx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresshuC4Ql8 = accounts[5]
		const uintZVBJ4EK = BigInt("1733")
		const DatrixoEquityTokenkN5HsWY = await DatrixoEquityToken.new(addresshuC4Ql8, uintZVBJ4EK, {from: "0x0000000000000000000000000000000000000001"});
		const uintBjyIX6Q = BigInt("787")
		const addressLzX3Qni = accounts[0]
		const addressra5sKyi = accounts[0]
		const addressp0HpPKT = accounts[4]
		const boolNRI5UO = await DatrixoEquityTokenkN5HsWY.transfer.call(addressLzX3Qni, uintBjyIX6Q, {from: accounts[3]});
		const boolBsLE53R = await DatrixoEquityTokenkN5HsWY.removeShareholder.call(addressra5sKyi, {from: accounts[1]});
		await DatrixoEquityTokenkN5HsWY.afterStartTime.call({from: accounts[1]});
		const bool3vsTaO = await DatrixoEquityTokenkN5HsWY.removeShareholder.call(addressp0HpPKT, {from: accounts[0]});
	});

	it('test for DatrixoEquityToken', async () => {
		const address8XCCCg = accounts[2]
		const uintxaEfLmC = BigInt("1186")
		const DatrixoEquityTokenrhYeERS = await DatrixoEquityToken.new(address8XCCCg, uintxaEfLmC, {from: accounts[4]});
		const uintLzyPQEA = BigInt("974")
		const addressrxKD0OJ = accounts[3]
		const uintfpmK6VA = BigInt("1012")
		const uintObQ4Kc8 = BigInt("1591")
		const addresszUSjLQw = accounts[5]
		const uintU2eVwG = BigInt("115")
		const addressAk9N1xc = accounts[1]
		const addressc1OLJgd = accounts[3]
//		await DatrixoEquityTokenrhYeERS.afterStartTime.call({from: accounts[2]});
//		const boolJercBTL = await DatrixoEquityTokenrhYeERS.transfer.call(addressrxKD0OJ, uintLzyPQEA, {from: accounts[2]});
//		const uintBLRe7VU = await DatrixoEquityTokenrhYeERS.setStart.call(uintfpmK6VA, {from: accounts[2]});
//		const addressarrayNhpj9pV = await DatrixoEquityTokenrhYeERS.getShareholdersArray.call({from: accounts[4]});
//		const boolEbgCYm = await DatrixoEquityTokenrhYeERS.transfer.call(addresszUSjLQw, uintObQ4Kc8, {from: accounts[2]});
//		const boolCiS0iG = await DatrixoEquityTokenrhYeERS.transferFrom.call(addressc1OLJgd, addressAk9N1xc, uintU2eVwG, {from: accounts[3]});

		await expect(DatrixoEquityTokenrhYeERS.afterStartTime.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressnBkQBbJ = accounts[2]
		const uintplZe8Da = BigInt("904")
		const DatrixoEquityTokenvAES19N = await DatrixoEquityToken.new(addressnBkQBbJ, uintplZe8Da, {from: accounts[2]});
		const uintsIL9v5R = BigInt("839")
		const addressLaCzyVp = accounts[1]
		const addresskBAA5Wi = accounts[1]
		const addressarrayT91TFlf = await DatrixoEquityTokenvAES19N.getShareholdersArray.call({from: accounts[4]});
//		const boolBK83IvO = await DatrixoEquityTokenvAES19N.transferFrom.call(addresskBAA5Wi, addressLaCzyVp, uintsIL9v5R, {from: accounts[1]});

		assert.equal(addressarrayT91TFlf, )
		await expect(DatrixoEquityTokenvAES19N.transferFrom.call(addresskBAA5Wi, addressLaCzyVp, uintsIL9v5R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressFqa7Wpw = accounts[4]
		const uintYTMEWTV = BigInt("701")
		const DatrixoEquityTokenPboycAu = await DatrixoEquityToken.new(addressFqa7Wpw, uintYTMEWTV, {from: accounts[4]});
		const uintL7lsBxd = BigInt("419")
		const address1bGA44 = accounts[1]
		const addressxXVzJe3 = accounts[1]
//		const boolVBEtBRq = await DatrixoEquityTokenPboycAu.transferFrom.call(addressxXVzJe3, address1bGA44, uintL7lsBxd, {from: accounts[4]});
//		await DatrixoEquityTokenPboycAu.afterStartTime.call({from: accounts[4]});

		await expect(DatrixoEquityTokenPboycAu.transferFrom.call(addressxXVzJe3, address1bGA44, uintL7lsBxd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressnj97fJM = accounts[5]
		const uintaDEzXl = BigInt("868")
		const DatrixoEquityTokeno37mkU = await DatrixoEquityToken.new(addressnj97fJM, uintaDEzXl, {from: accounts[0]});
		const addressyI8UuuI = accounts[4]
//		const boolS49n5sn = await DatrixoEquityTokeno37mkU.removeShareholder.call(addressyI8UuuI, {from: accounts[5]});
//		await DatrixoEquityTokeno37mkU.onlyOwner.call({from: accounts[2]});

		await expect(DatrixoEquityTokeno37mkU.removeShareholder.call(addressyI8UuuI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbX9oAqF = accounts[5]
		const uintmc0xDr = BigInt("868")
		const DatrixoEquityTokeno37mkU = await DatrixoEquityToken.new(addressbX9oAqF, uintmc0xDr, {from: accounts[0]});
		const uintebPY5BH = BigInt("1964")
		const addressQvVewXZ = accounts[2]
		const addressXI9bMi = accounts[6]
		const booldtaBfpM = await DatrixoEquityTokeno37mkU.transfer.call(addressQvVewXZ, uintebPY5BH, {from: accounts[5]});
//		const boolS49n5sn = await DatrixoEquityTokeno37mkU.removeShareholder.call(addressXI9bMi, {from: accounts[5]});
//		await DatrixoEquityTokeno37mkU.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await DatrixoEquityTokeno37mkU.onlyOwner.call({from: accounts[2]});

		assert.equal(booldtaBfpM, true)
		await expect(DatrixoEquityTokeno37mkU.removeShareholder.call(addressXI9bMi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressHhBHuU9 = accounts[5]
		const uintq0v6rkj = BigInt("868")
		const DatrixoEquityTokeno37mkU = await DatrixoEquityToken.new(addressHhBHuU9, uintq0v6rkj, {from: accounts[0]});
		const uintCYLIkws = BigInt("1677")
		const uintR6tbD0J = BigInt("478")
//		const uintM6M9EAQ = await DatrixoEquityTokeno37mkU.setStart.call(uintCYLIkws, {from: accounts[5]});
//		const uintBOJLgm = await DatrixoEquityTokeno37mkU.setStart.call(uintR6tbD0J, {from: accounts[1]});

		await expect(DatrixoEquityTokeno37mkU.setStart.call(uintCYLIkws, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressFSPR3CO = accounts[3]
		const uintP6GME6n = BigInt("845")
		const DatrixoEquityTokennCSdLOq = await DatrixoEquityToken.new(addressFSPR3CO, uintP6GME6n, {from: accounts[4]});
		const uintI0nBamv = BigInt("704")
		const addressSCcm2C4 = accounts[3]
		const uintz7TIJF1 = BigInt("1442")
		const uintEt07fV6 = BigInt("1705")
		const addressozVBV8f = accounts[0]
		const addresswpAEokA = accounts[2]
//		const boolErkSJtr = await DatrixoEquityTokennCSdLOq.transfer.call(addressSCcm2C4, uintI0nBamv, {from: accounts[3]});
//		const uintXjpYvg4 = await DatrixoEquityTokennCSdLOq.setStart.call(uintz7TIJF1, {from: accounts[1]});
//		const boolHe8hk2b = await DatrixoEquityTokennCSdLOq.transferFrom.call(addresswpAEokA, addressozVBV8f, uintEt07fV6, {from: accounts[3]});
//		await DatrixoEquityTokennCSdLOq.afterStartTime.call({from: accounts[4]});

		await expect(DatrixoEquityTokennCSdLOq.transfer.call(addressSCcm2C4, uintI0nBamv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})