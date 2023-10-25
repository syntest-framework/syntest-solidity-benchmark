const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractcMvuIzP = await HTDD_contract.new({from: accounts[5]});
		const uintYI07RLs = BigInt("1775")
		const addressD4CPTHs = accounts[5]
		const uintmAnvc7O = BigInt("745")
		const addressDRqjEVk = accounts[0]
		const boolx3T2vdz = await HTDD_contractcMvuIzP.approve.call(addressD4CPTHs, uintYI07RLs, {from: accounts[1]});
		const boolDiwNtH = await HTDD_contractcMvuIzP.approve.call(addressDRqjEVk, uintmAnvc7O, {from: accounts[0]});

		assert.equal(boolDiwNtH, true)
		assert.equal(boolx3T2vdz, true)
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractAflSdCY = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQIKiIx = BigInt("699")
		const addressqJc5akH = accounts[2]
		const uintIk5Pnt = BigInt("1270")
		const addressLbwO3xI = accounts[5]
		const uintwAxOcTY = BigInt("660")
		const addresswSXkwg = accounts[1]
		const uintmyxWdVt = BigInt("1896")
		const addressYYX6Blm = accounts[0]
		const addressrCFpP8 = accounts[1]
		const uintutzau2 = BigInt("481")
		const addresseoyIxj = accounts[4]
		const boolwgHu36 = await HTDD_contractAflSdCY.transfer.call(addressqJc5akH, uintQIKiIx, {from: accounts[4]});
		const booltnOLymQ = await HTDD_contractAflSdCY.approve.call(addressLbwO3xI, uintIk5Pnt, {from: accounts[0]});
		const booldRdokuS = await HTDD_contractAflSdCY.approve.call(addresswSXkwg, uintwAxOcTY, {from: accounts[1]});
		const boolVuvt4uf = await HTDD_contractAflSdCY.transferFrom.call(addressrCFpP8, addressYYX6Blm, uintmyxWdVt, {from: accounts[5]});
		const boolNULz8Si = await HTDD_contractAflSdCY.transfer.call(addresseoyIxj, uintutzau2, {from: accounts[5]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractT8SykvK = await HTDD_contract.new({from: accounts[2]});
		const uintLzG3DUs = BigInt("1359")
		const addressUOTf68l = accounts[1]
		const uinte2q4XIi = BigInt("1981")
		const address63vByq = accounts[3]
		const addressNzGcufx = accounts[2]
		const uinteiHITCZ = BigInt("1469")
		const addresscSaetJK = accounts[0]
		const addressIXsCQIh = accounts[2]
		const addressWIhfv72 = accounts[1]
		const uintGzCmpeL = BigInt("426")
		const addressEW6I1Z = accounts[0]
		const boolWLhVX13 = await HTDD_contractT8SykvK.approve.call(addressUOTf68l, uintLzG3DUs, {from: accounts[0]});
//		const boolIDlbaIs = await HTDD_contractT8SykvK.transferFrom.call(addressNzGcufx, address63vByq, uinte2q4XIi, {from: accounts[1]});
//		const boolkV2dwg3 = await HTDD_contractT8SykvK.transfer.call(addresscSaetJK, uinteiHITCZ, {from: accounts[2]});
//		const uint256P0LAFjb = await HTDD_contractT8SykvK.allowance.call(addressWIhfv72, addressIXsCQIh, {from: accounts[1]});
//		const boolTogt3d5 = await HTDD_contractT8SykvK.transfer.call(addressEW6I1Z, uintGzCmpeL, {from: accounts[5]});

		assert.equal(boolWLhVX13, true)
		await expect(HTDD_contractT8SykvK.transferFrom.call(addressNzGcufx, address63vByq, uinte2q4XIi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractWeRnC7R = await HTDD_contract.new({from: accounts[2]});
		const addressFp3tv5 = accounts[0]
		const addressVYrgUCs = accounts[0]
		const uintNmPiPl7 = BigInt("1638")
		const addressWiZQ1Xq = accounts[0]
		const uintjKuQJ9g = BigInt("1857")
		const addressb4Nwde = accounts[4]
		const uint256Vz70icl = await HTDD_contractWeRnC7R.allowance.call(addressVYrgUCs, addressFp3tv5, {from: accounts[0]});
		const boollH5XWJa = await HTDD_contractWeRnC7R.approve.call(addressWiZQ1Xq, uintNmPiPl7, {from: accounts[4]});
//		const boolv3T0F7C = await HTDD_contractWeRnC7R.transfer.call(addressb4Nwde, uintjKuQJ9g, {from: accounts[3]});

		assert.equal(boollH5XWJa, true)
		assert.equal(uint256Vz70icl, BigInt("0"))
		await expect(HTDD_contractWeRnC7R.transfer.call(addressb4Nwde, uintjKuQJ9g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractRa1v3Q = await HTDD_contract.new({from: accounts[0]});
		const uintGfHYarr = BigInt("94")
		const addressNOpJhq = accounts[0]
		const addressecj4tbr = accounts[0]
		const addressaBu2jwt = accounts[4]
		const uintqMo7sw8 = BigInt("583")
		const addressJJEssoC = "0x0000000000000000000000000000000000000001"
		const uintycp9KD7 = BigInt("1251")
		const addresshCbDRlI = accounts[3]
		const uintWoqRIV = BigInt("1896")
		const addressgwJ0261 = accounts[5]
		const addressVNtgnqq = accounts[2]
		const boolmoMHrdV = await HTDD_contractRa1v3Q.transfer.call(addressNOpJhq, uintGfHYarr, {from: accounts[0]});
		const uint256trAEnuL = await HTDD_contractRa1v3Q.allowance.call(addressaBu2jwt, addressecj4tbr, {from: accounts[2]});
		const boolSHS0L23 = await HTDD_contractRa1v3Q.approve.call(addressJJEssoC, uintqMo7sw8, {from: accounts[4]});
		const booleXxfraR = await HTDD_contractRa1v3Q.approve.call(addresshCbDRlI, uintycp9KD7, {from: accounts[0]});
//		const boolXR9jJbx = await HTDD_contractRa1v3Q.transferFrom.call(addressVNtgnqq, addressgwJ0261, uintWoqRIV, {from: accounts[3]});

		assert.equal(boolSHS0L23, true)
		assert.equal(booleXxfraR, true)
		assert.equal(boolmoMHrdV, true)
		assert.equal(uint256trAEnuL, BigInt("0"))
		await expect(HTDD_contractRa1v3Q.transferFrom.call(addressVNtgnqq, addressgwJ0261, uintWoqRIV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})