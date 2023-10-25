const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinLJj3Pl = await EdenCoin.new({from: accounts[3]});
		const uintoDVp6PH = BigInt("1977")
		const addressjxGFjDr = accounts[3]
		const uintm7JqoPC = BigInt("1532")
		const addressePogip7 = accounts[4]
		const uintyyzGvfm = BigInt("1448")
		const addressrIEGHqK = accounts[3]
		const uintj2Cjpun = BigInt("950")
		const addressjfP2CJh = accounts[2]
		const uintHIbnPwZ = BigInt("1030")
		const addressXEtcO01 = accounts[2]
		const uintOTKFr9J = BigInt("1633")
		const addressTXCWcGS = accounts[2]
		const boolmKUSaB3 = await EdenCoinLJj3Pl.approve.call(addressjxGFjDr, uintoDVp6PH, {from: accounts[4]});
		const boolwNtzs2W = await EdenCoinLJj3Pl.increaseApproval.call(addressePogip7, uintm7JqoPC, {from: accounts[0]});
		const boolqeamDF8 = await EdenCoinLJj3Pl.increaseApproval.call(addressrIEGHqK, uintyyzGvfm, {from: accounts[3]});
		const boolEPqJVVe = await EdenCoinLJj3Pl.transfer.call(addressjfP2CJh, uintj2Cjpun, {from: accounts[1]});
		const boolUsCVohj = await EdenCoinLJj3Pl.transfer.call(addressXEtcO01, uintHIbnPwZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolixHTVVB = await EdenCoinLJj3Pl.increaseApproval.call(addressTXCWcGS, uintOTKFr9J, {from: accounts[5]});

		assert.equal(boolmKUSaB3, true)
		assert.equal(boolqeamDF8, true)
		assert.equal(boolwNtzs2W, true)
		await expect(EdenCoinLJj3Pl.transfer.call(addressjfP2CJh, uintj2Cjpun, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinVzv9ecE = await EdenCoin.new({from: accounts[1]});
		const uintAlLZNFe = BigInt("363")
		const addressQd0eqBF = accounts[3]
		const uintVT66NLG = BigInt("1018")
		const addressmPBYTZl = accounts[1]
		const address2yLDTE = accounts[0]
		const uinttPiyQP = BigInt("1800")
		const addressllgW1Gy = accounts[4]
		const addressDK5gfI = accounts[2]
		const addressSfOHlT9 = accounts[4]
		const boolAQ2gH9Z = await EdenCoinVzv9ecE.approve.call(addressQd0eqBF, uintAlLZNFe, {from: "0x0000000000000000000000000000000000000001"});
		const boolCSkrAlK = await EdenCoinVzv9ecE.transferFrom.call(address2yLDTE, addressmPBYTZl, uintVT66NLG, {from: accounts[1]});
		const booli2806O7 = await EdenCoinVzv9ecE.increaseApproval.call(addressllgW1Gy, uinttPiyQP, {from: accounts[4]});
		const uint256nerVTRv = await EdenCoinVzv9ecE.allowance.call(addressSfOHlT9, addressDK5gfI, {from: accounts[4]});

		assert.equal(boolAQ2gH9Z, true)
		await expect(EdenCoinVzv9ecE.transferFrom.call(address2yLDTE, addressmPBYTZl, uintVT66NLG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinUHMwAAV = await EdenCoin.new({from: accounts[0]});
		const uintB61LG5m = BigInt("1398")
		const addressJSK8JY1 = accounts[5]
		const addresseJ52Xu0 = accounts[3]
		const addressaBnU91A = "0x0000000000000000000000000000000000000001"
		const uintcP36toc = BigInt("658")
		const addressuMXFezs = accounts[0]
		const uintRPZvdvp = BigInt("1429")
		const addressB81NQ7h = accounts[4]
		const addresskmoDOBi = "0x0000000000000000000000000000000000000001"
		const boolR1vXH3o = await EdenCoinUHMwAAV.increaseApproval.call(addressJSK8JY1, uintB61LG5m, {from: accounts[4]});
		const uint256crynRII = await EdenCoinUHMwAAV.allowance.call(addressaBnU91A, addresseJ52Xu0, {from: accounts[2]});
		const boolFeoqt2U = await EdenCoinUHMwAAV.transfer.call(addressuMXFezs, uintcP36toc, {from: accounts[0]});
		const boolYf9Wf8b = await EdenCoinUHMwAAV.transferFrom.call(addresskmoDOBi, addressB81NQ7h, uintRPZvdvp, {from: accounts[0]});

		assert.equal(boolFeoqt2U, true)
		assert.equal(boolR1vXH3o, true)
		assert.equal(uint256crynRII, BigInt("0"))
		await expect(EdenCoinUHMwAAV.transferFrom.call(addresskmoDOBi, addressB81NQ7h, uintRPZvdvp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinsVfcka7 = await EdenCoin.new({from: accounts[4]});
		const addresstEVkDl1 = accounts[0]
		const addressvSQFy7p = accounts[4]
		const addressuieOHvO = accounts[1]
		const addressJFcQbTn = accounts[3]
		const addressHgIqS9i = accounts[2]
		const uintBUHJhJV = BigInt("781")
		const addressBbMbFDS = accounts[0]
		const address2ALFWm = accounts[1]
		const uint256xRjs4Zl = await EdenCoinsVfcka7.allowance.call(addressvSQFy7p, addresstEVkDl1, {from: accounts[1]});
		const uint256Wl1cAwm = await EdenCoinsVfcka7.allowance.call(addressJFcQbTn, addressuieOHvO, {from: accounts[4]});
		const uint256OdMJtzx = await EdenCoinsVfcka7.balanceOf.call(addressHgIqS9i, {from: accounts[0]});
		const boolJsTdJFn = await EdenCoinsVfcka7.transferFrom.call(address2ALFWm, addressBbMbFDS, uintBUHJhJV, {from: accounts[1]});

		assert.equal(uint256OdMJtzx, BigInt("0"))
		assert.equal(uint256Wl1cAwm, BigInt("0"))
		assert.equal(uint256xRjs4Zl, BigInt("0"))
		await expect(EdenCoinsVfcka7.transferFrom.call(address2ALFWm, addressBbMbFDS, uintBUHJhJV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinBVPwrmo = await EdenCoin.new({from: accounts[1]});
		const uintZQrqrzi = BigInt("889")
		const addressvCVdUzj = accounts[3]
		const uintuzCnzoL = BigInt("467")
		const addressoM525v3 = accounts[4]
		const uintP2Np72u = BigInt("1998")
		const addressLtcCa23 = "0x0000000000000000000000000000000000000001"
		const addressjeeE1oX = accounts[2]
		const addresstyNvqdM = accounts[4]
		const boolECYt61a = await EdenCoinBVPwrmo.approve.call(addressvCVdUzj, uintZQrqrzi, {from: accounts[2]});
		const boolYxj5Y40 = await EdenCoinBVPwrmo.decreaseApproval.call(addressoM525v3, uintuzCnzoL, {from: "0x0000000000000000000000000000000000000001"});
		const boolX7Jh3ue = await EdenCoinBVPwrmo.transfer.call(addressLtcCa23, uintP2Np72u, {from: accounts[1]});
		const uint256nE5nL3 = await EdenCoinBVPwrmo.allowance.call(addresstyNvqdM, addressjeeE1oX, {from: accounts[5]});

		assert.equal(boolECYt61a, true)
		assert.equal(boolX7Jh3ue, true)
		assert.equal(boolYxj5Y40, true)
		assert.equal(uint256nE5nL3, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinzV4ecZa = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmPzIlX = BigInt("13")
		const addressSP3OdtK = accounts[3]
		const addressUPbjT6Z = accounts[1]
		const addresszzHvERt = accounts[3]
		const addressU3Zc65C = accounts[4]
		const addressWtH7od = accounts[3]
		const addresszfmEdYZ = accounts[0]
		const uintJUICNWk = BigInt("1427")
		const addressbgDlVum = accounts[3]
		const addressgT6bCx = accounts[4]
		const addressha5CYmC = accounts[2]
		const uintsqjuK0m = BigInt("146")
		const addressgJPsg0Y = accounts[0]
		const addressOiurXAw = accounts[4]
		const boolO3zg5g = await EdenCoinzV4ecZa.transferFrom.call(addressUPbjT6Z, addressSP3OdtK, uintmPzIlX, {from: accounts[4]});
		const uint256S3AF1iC = await EdenCoinzV4ecZa.allowance.call(addressU3Zc65C, addresszzHvERt, {from: accounts[0]});
		const uint256O9OWgKV = await EdenCoinzV4ecZa.allowance.call(addresszfmEdYZ, addressWtH7od, {from: accounts[4]});
		const booleqlqvGu = await EdenCoinzV4ecZa.transfer.call(addressbgDlVum, uintJUICNWk, {from: accounts[4]});
		const uint2566z40Jb = await EdenCoinzV4ecZa.allowance.call(addressha5CYmC, addressgT6bCx, {from: accounts[1]});
		const boolSVgjgL9 = await EdenCoinzV4ecZa.transferFrom.call(addressOiurXAw, addressgJPsg0Y, uintsqjuK0m, {from: accounts[0]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinBVPwrmo = await EdenCoin.new({from: accounts[1]});
		const uintVBfFUkk = BigInt("0")
		const addressVHljETg = accounts[7]
		const uintLGA9qpQ = BigInt("159")
		const addressQIrfCf2 = accounts[4]
		const uintC3ww0Km = BigInt("279")
		const addressEyy9R09 = accounts[4]
		const boolYxj5Y40 = await EdenCoinBVPwrmo.decreaseApproval.call(addressVHljETg, uintVBfFUkk, {from: "0x0000000000000000000000000000000000000001"});
		const boolE5H6tXB = await EdenCoinBVPwrmo.approve.call(addressQIrfCf2, uintLGA9qpQ, {from: accounts[3]});
		const boolrJRHlY0 = await EdenCoinBVPwrmo.approve.call(addressEyy9R09, uintC3ww0Km, {from: accounts[4]});

		assert.equal(boolE5H6tXB, true)
		assert.equal(boolYxj5Y40, true)
		assert.equal(boolrJRHlY0, true)
	});
})