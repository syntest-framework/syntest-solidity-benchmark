const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractQ6SFOY6 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnukGqhN = BigInt("1947")
		const addressnmFXd0 = accounts[2]
		const uintkXQoKQJ = BigInt("1920")
		const addressdcKgOba = accounts[3]
		const addressBRPAZqk = accounts[3]
		const uintPZ75qcV = BigInt("573")
		const addressQRLUYm = accounts[0]
		const uintXo4Orl7 = BigInt("275")
		const addressFoLN53 = accounts[2]
		const uintMqxxNZO = BigInt("408")
		const addresskPjIEBh = accounts[5]
		const addresstvUCe8r = accounts[4]
		const boolaTQ9p2Z = await HTDD_contractQ6SFOY6.approve.call(addressnmFXd0, uintnukGqhN, {from: accounts[1]});
		const boolQxKygg3 = await HTDD_contractQ6SFOY6.transferFrom.call(addressBRPAZqk, addressdcKgOba, uintkXQoKQJ, {from: accounts[1]});
		const boolguFnYww = await HTDD_contractQ6SFOY6.approve.call(addressQRLUYm, uintPZ75qcV, {from: accounts[0]});
		const boolEuSZoOx = await HTDD_contractQ6SFOY6.approve.call(addressFoLN53, uintXo4Orl7, {from: accounts[1]});
		const boolTzkcGzG = await HTDD_contractQ6SFOY6.transferFrom.call(addresstvUCe8r, addresskPjIEBh, uintMqxxNZO, {from: accounts[4]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractE1EwFq7 = await HTDD_contract.new({from: accounts[3]});
		const uintTruwOfA = BigInt("1387")
		const addressnfuN8VT = accounts[3]
		const addresskUb77tl = accounts[1]
		const uintSJoBKkL = BigInt("1318")
		const addressOYhE72p = accounts[3]
		const addresszVyBX19 = accounts[1]
		const addressssnOTBf = accounts[2]
		const addressbMZAdT = accounts[2]
		const uintorw6Ug = BigInt("1182")
		const addressrNJ3M0w = accounts[0]
		const addresszFbYtjU = "0x0000000000000000000000000000000000000001"
		const addressn5t76xm = accounts[5]
		const addressLQvT7dW = accounts[1]
//		const boolGxhqoQ9 = await HTDD_contractE1EwFq7.transferFrom.call(addresskUb77tl, addressnfuN8VT, uintTruwOfA, {from: accounts[5]});
//		const boolCla8H53 = await HTDD_contractE1EwFq7.transferFrom.call(addresszVyBX19, addressOYhE72p, uintSJoBKkL, {from: accounts[1]});
//		const uint256nNG4hcV = await HTDD_contractE1EwFq7.allowance.call(addressbMZAdT, addressssnOTBf, {from: "0x0000000000000000000000000000000000000001"});
//		const booltsj86ud = await HTDD_contractE1EwFq7.transferFrom.call(addresszFbYtjU, addressrNJ3M0w, uintorw6Ug, {from: accounts[1]});
//		const uint256v57LI8n = await HTDD_contractE1EwFq7.allowance.call(addressLQvT7dW, addressn5t76xm, {from: accounts[1]});

		await expect(HTDD_contractE1EwFq7.transferFrom.call(addresskUb77tl, addressnfuN8VT, uintTruwOfA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractg1DOqFt = await HTDD_contract.new({from: accounts[3]});
		const uintBYlek07 = BigInt("280")
		const addressi2oXVkB = accounts[1]
		const uinttqLU8lO = BigInt("855")
		const addressUILa5Ke = accounts[4]
		const uintZjiHPZY = BigInt("1467")
		const addressrIW24py = accounts[3]
		const boolau8bOVi = await HTDD_contractg1DOqFt.approve.call(addressi2oXVkB, uintBYlek07, {from: accounts[4]});
		const boolDtN8Rde = await HTDD_contractg1DOqFt.approve.call(addressUILa5Ke, uinttqLU8lO, {from: accounts[3]});
//		const boolMca0sKn = await HTDD_contractg1DOqFt.transfer.call(addressrIW24py, uintZjiHPZY, {from: accounts[4]});

		assert.equal(boolDtN8Rde, true)
		assert.equal(boolau8bOVi, true)
		await expect(HTDD_contractg1DOqFt.transfer.call(addressrIW24py, uintZjiHPZY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractBdlHMua = await HTDD_contract.new({from: accounts[4]});
		const uintnCuYriW = BigInt("246")
		const addressO3nWoOp = accounts[0]
		const addressGIXjekp = accounts[4]
		const addressSJ85eFv = accounts[3]
		const uintSdbXva3 = BigInt("1012")
		const addressxN7R0J0 = accounts[4]
		const addressTEUfzq = "0x0000000000000000000000000000000000000001"
		const addressmFc0Rc5 = accounts[3]
		const addressW8PhNma = accounts[5]
		const uintQdZal1t = BigInt("138")
		const addressNYdMlZ = accounts[2]
		const address09gUcK = accounts[1]
		const boolkcybbP = await HTDD_contractBdlHMua.approve.call(addressO3nWoOp, uintnCuYriW, {from: accounts[2]});
		const uint256GYjHLie = await HTDD_contractBdlHMua.allowance.call(addressSJ85eFv, addressGIXjekp, {from: accounts[3]});
//		const boolA9ThCCq = await HTDD_contractBdlHMua.transferFrom.call(addressTEUfzq, addressxN7R0J0, uintSdbXva3, {from: accounts[3]});
//		const uint256Z0PeCV6 = await HTDD_contractBdlHMua.allowance.call(addressW8PhNma, addressmFc0Rc5, {from: accounts[5]});
//		const boolUic9Cko = await HTDD_contractBdlHMua.transferFrom.call(address09gUcK, addressNYdMlZ, uintQdZal1t, {from: accounts[2]});

		assert.equal(boolkcybbP, true)
		assert.equal(uint256GYjHLie, BigInt("0"))
		await expect(HTDD_contractBdlHMua.transferFrom.call(addressTEUfzq, addressxN7R0J0, uintSdbXva3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractOXUbDRc = await HTDD_contract.new({from: accounts[1]});
		const uintemWVuiS = BigInt("325")
		const addressdaKfZtR = accounts[4]
		const addressr2LRmdm = accounts[1]
		const uintG3J7dI = BigInt("1994")
		const addressOXqK8M9 = accounts[1]
		const addressPofp2g0 = accounts[4]
		const uintGJWsa3R = BigInt("1617")
		const addressmmqQiU = accounts[4]
		const uintJTvwBzV = BigInt("1076")
		const addressEcaOMm = accounts[3]
//		const boolAVmwYq0 = await HTDD_contractOXUbDRc.transferFrom.call(addressr2LRmdm, addressdaKfZtR, uintemWVuiS, {from: accounts[0]});
//		const booldmyW6iE = await HTDD_contractOXUbDRc.transferFrom.call(addressPofp2g0, addressOXqK8M9, uintG3J7dI, {from: accounts[3]});
//		const boollwUOOdx = await HTDD_contractOXUbDRc.transfer.call(addressmmqQiU, uintGJWsa3R, {from: accounts[4]});
//		const boolhlGg0Wp = await HTDD_contractOXUbDRc.transfer.call(addressEcaOMm, uintJTvwBzV, {from: accounts[3]});

		await expect(HTDD_contractOXUbDRc.transferFrom.call(addressr2LRmdm, addressdaKfZtR, uintemWVuiS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractJDLpgG2 = await HTDD_contract.new({from: accounts[0]});
		const uintK0CI8xh = BigInt("521")
		const addressWx4g9F = accounts[5]
		const uintXPCypLo = BigInt("1136")
		const addressIumZ1p = "0x0000000000000000000000000000000000000001"
		const boolfIT8qo7 = await HTDD_contractJDLpgG2.transfer.call(addressWx4g9F, uintK0CI8xh, {from: accounts[0]});
//		const boolHgDyD0K = await HTDD_contractJDLpgG2.transfer.call(addressIumZ1p, uintXPCypLo, {from: accounts[3]});

		assert.equal(boolfIT8qo7, true)
		await expect(HTDD_contractJDLpgG2.transfer.call(addressIumZ1p, uintXPCypLo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})