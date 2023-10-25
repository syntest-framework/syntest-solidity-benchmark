const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractUpWQshs = await HTDD_contract.new({from: accounts[3]});
		const uintFZy7Pg1 = BigInt("751")
		const addressNWlbutV = accounts[0]
		const addressYm2kjnx = accounts[2]
		const addressAj2LRcw = accounts[0]
		const uintzkb6sIc = BigInt("1524")
		const addressFIdfGEA = accounts[3]
		const addressAJz2dVG = accounts[4]
		const uintUPPfBat = BigInt("156")
		const addressFBvk2Ox = accounts[1]
		const uintUBSW8j = BigInt("364")
		const addressnvQY95u = accounts[1]
		const uintBeiKHIJ = BigInt("1722")
		const addresss0XjTcE = accounts[3]
		const booljIRmfUS = await HTDD_contractUpWQshs.approve.call(addressNWlbutV, uintFZy7Pg1, {from: accounts[0]});
		const uint256Lt6VT3F = await HTDD_contractUpWQshs.allowance.call(addressAj2LRcw, addressYm2kjnx, {from: accounts[2]});
		const booljdUkrW8 = await HTDD_contractUpWQshs.transferFrom.call(addressAJz2dVG, addressFIdfGEA, uintzkb6sIc, {from: accounts[0]});
		const boolYwAiRg = await HTDD_contractUpWQshs.approve.call(addressFBvk2Ox, uintUPPfBat, {from: accounts[2]});
		const boolQDSqctr = await HTDD_contractUpWQshs.transfer.call(addressnvQY95u, uintUBSW8j, {from: accounts[1]});
		const boolaKG8ug = await HTDD_contractUpWQshs.approve.call(addresss0XjTcE, uintBeiKHIJ, {from: accounts[1]});

		assert.equal(booljIRmfUS, true)
		assert.equal(uint256Lt6VT3F, BigInt("0"))
		await expect(HTDD_contractUpWQshs.transferFrom.call(addressAJz2dVG, addressFIdfGEA, uintzkb6sIc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractzMstl6B = await HTDD_contract.new({from: accounts[0]});
		const uintqOqd9RJ = BigInt("104")
		const addressSmHarVi = accounts[3]
		const uintQsauNTt = BigInt("891")
		const addressPhZHz0e = accounts[1]
		const addressVsVe0VM = accounts[0]
		const uintPudPDqD = BigInt("1691")
		const addressafpIioe = accounts[1]
		const uintmkjNc8 = BigInt("117")
		const addressQa1PdLw = accounts[4]
		const uinthfrsqS1 = BigInt("292")
		const addressSnXF9Ok = accounts[0]
		const booliMnr1ht = await HTDD_contractzMstl6B.approve.call(addressSmHarVi, uintqOqd9RJ, {from: accounts[1]});
		const boolbYhYA7Q = await HTDD_contractzMstl6B.transferFrom.call(addressVsVe0VM, addressPhZHz0e, uintQsauNTt, {from: accounts[3]});
		const boolVuU4bK1 = await HTDD_contractzMstl6B.transfer.call(addressafpIioe, uintPudPDqD, {from: accounts[5]});
		const boolEcNqeRi = await HTDD_contractzMstl6B.transfer.call(addressQa1PdLw, uintmkjNc8, {from: accounts[0]});
		const boolfldUkUs = await HTDD_contractzMstl6B.approve.call(addressSnXF9Ok, uinthfrsqS1, {from: accounts[3]});

		assert.equal(booliMnr1ht, true)
		await expect(HTDD_contractzMstl6B.transferFrom.call(addressVsVe0VM, addressPhZHz0e, uintQsauNTt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractWBTU1cL = await HTDD_contract.new({from: accounts[0]});
		const uintfo8LiET = BigInt("706")
		const addressbH5wNOI = "0x0000000000000000000000000000000000000001"
		const uintNvd1jP = BigInt("1163")
		const addressYBT6MOn = accounts[3]
		const uintTpskNb = BigInt("1954")
		const addressIIpLSbn = accounts[2]
		const uintsZbxd1R = BigInt("542")
		const addressZ2ptL2r = accounts[1]
		const addresstXcvPhx = accounts[1]
		const addressiBf8Ozm = accounts[4]
		const address48pQzj = accounts[3]
		const boolfnsfrh6 = await HTDD_contractWBTU1cL.approve.call(addressbH5wNOI, uintfo8LiET, {from: accounts[2]});
		const booltsmKKnN = await HTDD_contractWBTU1cL.transfer.call(addressYBT6MOn, uintNvd1jP, {from: accounts[0]});
		const boolgAZq3Io = await HTDD_contractWBTU1cL.approve.call(addressIIpLSbn, uintTpskNb, {from: "0x0000000000000000000000000000000000000001"});
		const booltQtzBvC = await HTDD_contractWBTU1cL.transferFrom.call(addresstXcvPhx, addressZ2ptL2r, uintsZbxd1R, {from: accounts[0]});
		const uint256H6yxgbj = await HTDD_contractWBTU1cL.allowance.call(address48pQzj, addressiBf8Ozm, {from: accounts[1]});

		assert.equal(boolfnsfrh6, true)
		assert.equal(boolgAZq3Io, true)
		assert.equal(booltsmKKnN, true)
		await expect(HTDD_contractWBTU1cL.transferFrom.call(addresstXcvPhx, addressZ2ptL2r, uintsZbxd1R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractTIezZt4 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSlgS2ov = accounts[1]
		const addressrUp4v6f = accounts[1]
		const uintpZXXf3 = BigInt("762")
		const addresslsAYTiQ = accounts[0]
		const uintqfSGgxI = BigInt("1355")
		const addressZAcQkpo = accounts[1]
		const uint256cCdElWW = await HTDD_contractTIezZt4.allowance.call(addressrUp4v6f, addressSlgS2ov, {from: accounts[3]});
		const booloe1Mt4D = await HTDD_contractTIezZt4.transfer.call(addresslsAYTiQ, uintpZXXf3, {from: accounts[2]});
		const boolkpWB0Nd = await HTDD_contractTIezZt4.transfer.call(addressZAcQkpo, uintqfSGgxI, {from: accounts[2]});
	});
})