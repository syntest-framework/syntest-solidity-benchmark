const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenwO17BmA = await ThriftToken.new({from: accounts[5]});
		const addressqkRoxEL = accounts[4]
		const uintib0G3vm = BigInt("991")
		const addressWMkk6fQ = accounts[4]
		const addresszpSITmH = accounts[3]
		const uintPApbs06 = BigInt("722")
		const addressP6LZBYt = accounts[5]
		const uints0H4kUe = BigInt("1413")
		const addressVHoGFP = accounts[2]
		const addresst5OjPDE = accounts[4]
		const uintBJY0mQ = BigInt("1464")
		const addressIHquaMJ = accounts[5]
		const uintnpuDfOj = BigInt("224")
		const address8mZFTZ = accounts[2]
		const addressLjcxFz = await ThriftTokenwO17BmA.transferOwnership.call(addressqkRoxEL, {from: accounts[2]});
		const boolDYTNRwm = await ThriftTokenwO17BmA.transferFrom.call(addresszpSITmH, addressWMkk6fQ, uintib0G3vm, {from: accounts[1]});
		const boolHQPELVc = await ThriftTokenwO17BmA.increaseApproval.call(addressP6LZBYt, uintPApbs06, {from: accounts[0]});
		const bool0rwYL5 = await ThriftTokenwO17BmA.transferFrom.call(addresst5OjPDE, addressVHoGFP, uints0H4kUe, {from: accounts[2]});
		const booljAwPH9Q = await ThriftTokenwO17BmA.transfer.call(addressIHquaMJ, uintBJY0mQ, {from: accounts[2]});
		const bool8fo72w = await ThriftTokenwO17BmA.approve.call(address8mZFTZ, uintnpuDfOj, {from: accounts[0]});

		await expect(ThriftTokenwO17BmA.transferOwnership.call(addressqkRoxEL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenh0uYbbg = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlJF9tMs = BigInt("463")
		const addressUQ66zn = accounts[0]
		const uintaiDbdo = BigInt("711")
		const addressr41zQ0E = accounts[0]
		const addressd0SCRSV = accounts[1]
		const addressXJcA4yA = accounts[1]
		const addressMUmyJuJ = "0x0000000000000000000000000000000000000001"
		const boolRl3fGqe = await ThriftTokenh0uYbbg.decreaseApproval.call(addressUQ66zn, uintlJF9tMs, {from: accounts[3]});
		const boolOwL67ai = await ThriftTokenh0uYbbg.increaseApproval.call(addressr41zQ0E, uintaiDbdo, {from: accounts[2]});
		const uint256xDSOyp = await ThriftTokenh0uYbbg.allowance.call(addressXJcA4yA, addressd0SCRSV, {from: accounts[2]});
		const uint256gwLVEkI = await ThriftTokenh0uYbbg.balanceOf.call(addressMUmyJuJ, {from: accounts[2]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenTPeuXWG = await ThriftToken.new({from: accounts[3]});
		const uintLrV0MDb = BigInt("1129")
		const addressHeMORfw = accounts[1]
		const uintf0qmKMp = BigInt("1910")
		const addressgohXRa = accounts[0]
		const addresszB4fnw5 = accounts[0]
		const uintiO1pV8W = BigInt("32")
		const addressGMRuS1g = accounts[0]
		const boolnDr2Q28 = await ThriftTokenTPeuXWG.increaseApproval.call(addressHeMORfw, uintLrV0MDb, {from: accounts[0]});
		const boolw3vaI05 = await ThriftTokenTPeuXWG.increaseApproval.call(addressgohXRa, uintf0qmKMp, {from: accounts[3]});
		const uint256s05Eoz8 = await ThriftTokenTPeuXWG.balanceOf.call(addresszB4fnw5, {from: accounts[3]});
		const boolDfr0xV = await ThriftTokenTPeuXWG.decreaseApproval.call(addressGMRuS1g, uintiO1pV8W, {from: accounts[0]});

		assert.equal(boolnDr2Q28, true)
		assert.equal(boolw3vaI05, true)
		assert.equal(uint256s05Eoz8, BigInt("0"))
		await expect(ThriftTokenTPeuXWG.decreaseApproval.call(addressGMRuS1g, uintiO1pV8W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenuML9GDD = await ThriftToken.new({from: accounts[3]});
		const uintRzXEBG1 = BigInt("910")
		const addressKECQORk = accounts[0]
		const uintwePjNuw = BigInt("1294")
		const addressp8wC78i = accounts[4]
		const addressydTDzgl = accounts[2]
		const uintxmhimT9 = BigInt("1489")
		const addressqAaiAUH = accounts[3]
		const addressivdaT9 = accounts[0]
		const uintXv13ja = BigInt("639")
		const addressmsV3J3 = accounts[5]
		const uintypCS2WN = BigInt("1805")
		const addressilGvyIK = "0x0000000000000000000000000000000000000001"
		const boolsOeXRn8 = await ThriftTokenuML9GDD.approve.call(addressKECQORk, uintRzXEBG1, {from: accounts[2]});
		const boolf9uVkzS = await ThriftTokenuML9GDD.transferFrom.call(addressydTDzgl, addressp8wC78i, uintwePjNuw, {from: accounts[4]});
		const boolxq7rLgV = await ThriftTokenuML9GDD.approve.call(addressqAaiAUH, uintxmhimT9, {from: accounts[2]});
		const uint256hnd1nmi = await ThriftTokenuML9GDD.transferableTokens.call(addressivdaT9, {from: accounts[3]});
		const boolsXQie6w = await ThriftTokenuML9GDD.approve.call(addressmsV3J3, uintXv13ja, {from: accounts[5]});
		const boolALhYqAo = await ThriftTokenuML9GDD.decreaseApproval.call(addressilGvyIK, uintypCS2WN, {from: accounts[0]});

		assert.equal(boolsOeXRn8, true)
		await expect(ThriftTokenuML9GDD.transferFrom.call(addressydTDzgl, addressp8wC78i, uintwePjNuw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenyDFUL62 = await ThriftToken.new({from: accounts[2]});
		const uintYU6IYHl = BigInt("99")
		const addressTL1Qjfh = accounts[3]
		const addressyQDoBT = accounts[3]
		const uintOu9CHAB = BigInt("432")
		const addresszniU10V = accounts[5]
		const boolprp7x9a = await ThriftTokenyDFUL62.transfer.call(addressTL1Qjfh, uintYU6IYHl, {from: accounts[0]});
		const uint256d99oeda = await ThriftTokenyDFUL62.balanceOf.call(addressyQDoBT, {from: accounts[4]});
		const boolBv1EZ22 = await ThriftTokenyDFUL62.transfer.call(addresszniU10V, uintOu9CHAB, {from: accounts[1]});

		await expect(ThriftTokenyDFUL62.transfer.call(addressTL1Qjfh, uintYU6IYHl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenwO17BmA = await ThriftToken.new({from: accounts[5]});
		const uintF0UhCIs = BigInt("1489")
		const addressHZ0IwRL = accounts[3]
		const addressLkSupX = accounts[4]
		const uintAnN9FiM = BigInt("991")
		const addressVd4LUif = accounts[4]
		const addressoTY9QpS = accounts[3]
		const uintaT3VuRn = BigInt("927")
		const addressqibTbLX = accounts[1]
		const uintVquRY2a = BigInt("722")
		const addressHixQMfT = accounts[5]
		const uintCxHIlJ3 = BigInt("1413")
		const addressNECnFPl = accounts[2]
		const addressR78aYA = accounts[4]
		const uintNzIzMLU = BigInt("1464")
		const addressqxbx8B2 = accounts[5]
		const uintH5j9u5T = BigInt("224")
		const addressgvpaW3 = accounts[2]
		const boolDSdOGgf = await ThriftTokenwO17BmA.decreaseApproval.call(addressHZ0IwRL, uintF0UhCIs, {from: accounts[0]});
		const addressLjcxFz = await ThriftTokenwO17BmA.transferOwnership.call(addressLkSupX, {from: accounts[2]});
		const boolDYTNRwm = await ThriftTokenwO17BmA.transferFrom.call(addressoTY9QpS, addressVd4LUif, uintAnN9FiM, {from: accounts[1]});
		const boolukWkT9f = await ThriftTokenwO17BmA.decreaseApproval.call(addressqibTbLX, uintaT3VuRn, {from: accounts[5]});
		const boolHQPELVc = await ThriftTokenwO17BmA.increaseApproval.call(addressHixQMfT, uintVquRY2a, {from: accounts[0]});
		const bool0rwYL5 = await ThriftTokenwO17BmA.transferFrom.call(addressR78aYA, addressNECnFPl, uintCxHIlJ3, {from: accounts[2]});
		const booljAwPH9Q = await ThriftTokenwO17BmA.transfer.call(addressqxbx8B2, uintNzIzMLU, {from: accounts[2]});
		const bool8fo72w = await ThriftTokenwO17BmA.approve.call(addressgvpaW3, uintH5j9u5T, {from: accounts[0]});

		assert.equal(boolDSdOGgf, true)
		await expect(ThriftTokenwO17BmA.transferOwnership.call(addressLkSupX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenkYaIKJ = await ThriftToken.new({from: accounts[4]});
		const uintgwQVopn = BigInt("746")
		const addressqc1pJ0F = accounts[5]
		const addresshwQjydk = accounts[3]
		const addressrO8aI9 = "0x0000000000000000000000000000000000000001"
		const addresso8ha46W = accounts[0]
		const boolxKD6KZ = await ThriftTokenkYaIKJ.approve.call(addressqc1pJ0F, uintgwQVopn, {from: accounts[0]});
		const uint256Ejgzfc2 = await ThriftTokenkYaIKJ.balanceOf.call(addresshwQjydk, {from: accounts[0]});
		const addressQd7kcmW = await ThriftTokenkYaIKJ.transferOwnership.call(addressrO8aI9, {from: accounts[4]});
		const addressex2k6x4 = await ThriftTokenkYaIKJ.transferOwnership.call(addresso8ha46W, {from: accounts[2]});

		assert.equal(boolxKD6KZ, true)
		assert.equal(uint256Ejgzfc2, BigInt("0"))
		await expect(ThriftTokenkYaIKJ.transferOwnership.call(addresso8ha46W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenkYaIKJ = await ThriftToken.new({from: accounts[4]});
		const uintDJAag6 = BigInt("1924")
		const addressLNRxoMO = accounts[2]
		const addressQyFieR = accounts[2]
		const addressKFqyntn = accounts[2]
		const uintWqLK2jq = BigInt("746")
		const addresswabGdLG = accounts[6]
		const boolkK7AgHy = await ThriftTokenkYaIKJ.decreaseApproval.call(addressLNRxoMO, uintDJAag6, {from: accounts[4]});
		const uint256TXpDZO = await ThriftTokenkYaIKJ.allowance.call(addressKFqyntn, addressQyFieR, {from: accounts[1]});
		const boolxKD6KZ = await ThriftTokenkYaIKJ.approve.call(addresswabGdLG, uintWqLK2jq, {from: accounts[0]});

		assert.equal(boolkK7AgHy, true)
		assert.equal(boolxKD6KZ, true)
		assert.equal(uint256TXpDZO, BigInt("0"))
	});
})