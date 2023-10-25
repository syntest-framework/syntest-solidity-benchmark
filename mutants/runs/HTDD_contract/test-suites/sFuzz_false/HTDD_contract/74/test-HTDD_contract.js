const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractXtelwcd = await HTDD_contract.new({from: accounts[1]});
		const uintKuloLf = BigInt("540")
		const addresspfe74R = accounts[3]
		const uintTdPAldM = BigInt("1736")
		const addressNVEeMj2 = accounts[4]
		const addressu4pemwL = accounts[1]
		const uintpfqDjs3 = BigInt("198")
		const addressfMU1JAU = accounts[1]
		const addressNGo0t5q = accounts[1]
		const boolqpE9WMo = await HTDD_contractXtelwcd.approve.call(addresspfe74R, uintKuloLf, {from: accounts[0]});
		const boolWsYKQJV = await HTDD_contractXtelwcd.transferFrom.call(addressu4pemwL, addressNVEeMj2, uintTdPAldM, {from: accounts[4]});
		const boolFxjZW0m = await HTDD_contractXtelwcd.transferFrom.call(addressNGo0t5q, addressfMU1JAU, uintpfqDjs3, {from: accounts[0]});

		assert.equal(boolqpE9WMo, true)
		await expect(HTDD_contractXtelwcd.transferFrom.call(addressu4pemwL, addressNVEeMj2, uintTdPAldM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractRkpl0Tp = await HTDD_contract.new({from: accounts[3]});
		const uintFwraFss = BigInt("1277")
		const addressDi46iSa = accounts[2]
		const uintU1kDWEg = BigInt("700")
		const address7KwzbE = accounts[0]
		const addressydP60Xe = accounts[3]
		const uintzj30pi5 = BigInt("1168")
		const addressdShgOp0 = accounts[1]
		const uintGImKmOl = BigInt("755")
		const addressSw1efzs = accounts[0]
		const uintl8b0oZF = BigInt("394")
		const addressmeKeOAx = accounts[1]
		const uintvEFaJDw = BigInt("1258")
		const addressqV1mGSx = accounts[4]
		const address9m8Aem = accounts[0]
		const boolpTru666 = await HTDD_contractRkpl0Tp.transfer.call(addressDi46iSa, uintFwraFss, {from: accounts[2]});
		const boolHpnjoXN = await HTDD_contractRkpl0Tp.transferFrom.call(addressydP60Xe, address7KwzbE, uintU1kDWEg, {from: accounts[4]});
		const boolbTItElE = await HTDD_contractRkpl0Tp.approve.call(addressdShgOp0, uintzj30pi5, {from: "0x0000000000000000000000000000000000000001"});
		const boolzjjUtEK = await HTDD_contractRkpl0Tp.approve.call(addressSw1efzs, uintGImKmOl, {from: accounts[5]});
		const boolm2p2hiB = await HTDD_contractRkpl0Tp.approve.call(addressmeKeOAx, uintl8b0oZF, {from: accounts[3]});
		const boolRHvjYFS = await HTDD_contractRkpl0Tp.transferFrom.call(address9m8Aem, addressqV1mGSx, uintvEFaJDw, {from: accounts[1]});

		await expect(HTDD_contractRkpl0Tp.transfer.call(addressDi46iSa, uintFwraFss, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractg5JZ7C4 = await HTDD_contract.new({from: accounts[1]});
		const addressRqlKac = accounts[4]
		const addresstGzkbw6 = accounts[2]
		const uintuSYPopF = BigInt("309")
		const addresscVHN3oF = accounts[1]
		const uintFooEs5A = BigInt("1947")
		const addressiwjbFuN = accounts[5]
		const addressb7xUgEn = accounts[4]
		const uintkIVMiUg = BigInt("1338")
		const addressYH8Wugp = "0x0000000000000000000000000000000000000001"
		const addressYOnoWXc = accounts[2]
		const uintJ7gtEwi = BigInt("1472")
		const addressRTCQpj = accounts[2]
		const addressekvezYl = accounts[3]
		const uint256iyNgdnN = await HTDD_contractg5JZ7C4.allowance.call(addresstGzkbw6, addressRqlKac, {from: "0x0000000000000000000000000000000000000001"});
		const boolphjM2Gp = await HTDD_contractg5JZ7C4.approve.call(addresscVHN3oF, uintuSYPopF, {from: accounts[2]});
		const boolrZSjv8h = await HTDD_contractg5JZ7C4.transferFrom.call(addressb7xUgEn, addressiwjbFuN, uintFooEs5A, {from: accounts[5]});
		const boolfzKdfHO = await HTDD_contractg5JZ7C4.transferFrom.call(addressYOnoWXc, addressYH8Wugp, uintkIVMiUg, {from: accounts[4]});
		const boolYOIRAZa = await HTDD_contractg5JZ7C4.transferFrom.call(addressekvezYl, addressRTCQpj, uintJ7gtEwi, {from: accounts[4]});

		assert.equal(boolphjM2Gp, true)
		assert.equal(uint256iyNgdnN, BigInt("0"))
		await expect(HTDD_contractg5JZ7C4.transferFrom.call(addressb7xUgEn, addressiwjbFuN, uintFooEs5A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractQwrbkeN = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIBexXLc = BigInt("441")
		const addressaNcSRtn = accounts[5]
		const uintcICQU0S = BigInt("1977")
		const addressrr6NP5 = accounts[4]
		const uintbGb3iu = BigInt("1610")
		const addressnDTcAZt = accounts[2]
		const addresshabBNGC = accounts[1]
		const uintbNpKKcm = BigInt("567")
		const addresslOb7heg = accounts[2]
		const boolmDfm4LI = await HTDD_contractQwrbkeN.approve.call(addressaNcSRtn, uintIBexXLc, {from: accounts[1]});
		const boolJDJGp7R = await HTDD_contractQwrbkeN.transfer.call(addressrr6NP5, uintcICQU0S, {from: accounts[1]});
		const boolLLvvTD = await HTDD_contractQwrbkeN.transferFrom.call(addresshabBNGC, addressnDTcAZt, uintbGb3iu, {from: accounts[4]});
		const boolPdZNUDr = await HTDD_contractQwrbkeN.transfer.call(addresslOb7heg, uintbNpKKcm, {from: accounts[5]});
	});
})