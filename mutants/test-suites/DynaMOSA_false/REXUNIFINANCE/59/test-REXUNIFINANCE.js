const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEUuJktZu = await REXUNIFINANCE.new({from: accounts[2]});
		const addressm1LlUp2 = accounts[4]
		const addressZE0oHE2 = accounts[1]
		const addressjKTwVrx = accounts[4]
		const addressywdegwD = accounts[0]
		const uint256Fp1UCAM = await REXUNIFINANCEUuJktZu.balanceOf.call(addressm1LlUp2, {from: accounts[1]});
		const uint256JVQHpam = await REXUNIFINANCEUuJktZu.balanceOf.call(addressZE0oHE2, {from: accounts[3]});
		const uint256C1KJhz1 = await REXUNIFINANCEUuJktZu.allowance.call(addressywdegwD, addressjKTwVrx, {from: accounts[2]});

		assert.equal(uint256C1KJhz1, BigInt("0"))
		assert.equal(uint256Fp1UCAM, BigInt("0"))
		assert.equal(uint256JVQHpam, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEdkRRoB5 = await REXUNIFINANCE.new({from: accounts[1]});
		const uintlB5PvuK = BigInt("36")
		const addressgbdgErN = "0x0000000000000000000000000000000000000001"
		const uintLjHn4Y = BigInt("1267")
		const addressYKQQK8J = "0x0000000000000000000000000000000000000001"
		const addressmMVmfde = accounts[2]
		const boolG22wY8K = await REXUNIFINANCEdkRRoB5.decreaseApproval.call(addressgbdgErN, uintlB5PvuK, {from: accounts[0]});
		const boolWFE7Frj = await REXUNIFINANCEdkRRoB5.approve.call(addressYKQQK8J, uintLjHn4Y, {from: accounts[3]});
		const uint256m6vW7h = await REXUNIFINANCEdkRRoB5.balanceOf.call(addressmMVmfde, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolG22wY8K, true)
		assert.equal(boolWFE7Frj, true)
		assert.equal(uint256m6vW7h, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEk2uFZRy = await REXUNIFINANCE.new({from: accounts[0]});
		const addressc0vi3Ed = accounts[3]
		const uintAbU7C1e = BigInt("473")
		const addressXf2nW4 = accounts[4]
		const uintH5LpeR7 = BigInt("182")
		const addresshgqDpUA = accounts[1]
//		const addressuhUwS2b = await REXUNIFINANCEk2uFZRy.transferOwnership.call(addressc0vi3Ed, {from: accounts[4]});
//		const booltmgrPxM = await REXUNIFINANCEk2uFZRy.approve.call(addressXf2nW4, uintAbU7C1e, {from: accounts[1]});
//		const boolEyf8bsb = await REXUNIFINANCEk2uFZRy.decreaseApproval.call(addresshgqDpUA, uintH5LpeR7, {from: accounts[4]});

		await expect(REXUNIFINANCEk2uFZRy.transferOwnership.call(addressc0vi3Ed, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEGhRkijm = await REXUNIFINANCE.new({from: accounts[2]});
		const uintK7ItCB = BigInt("2016")
		const addressryVWbNa = accounts[4]
		const uinte24GAcI = BigInt("2")
		const addressBD3CiLO = accounts[5]
		const uintO86Vpky = BigInt("1321")
		const addressItSzxb = accounts[4]
		const uintbJGAg0 = BigInt("1489")
		const addressh3RpxUo = accounts[1]
		const uintIBt3TPB = BigInt("677")
		const addressLiV8RVm = "0x0000000000000000000000000000000000000001"
		const booliGEhHHf = await REXUNIFINANCEGhRkijm.increaseApproval.call(addressryVWbNa, uintK7ItCB, {from: accounts[1]});
		const boolYhaezXV = await REXUNIFINANCEGhRkijm.approve.call(addressBD3CiLO, uinte24GAcI, {from: accounts[3]});
		const boolwHoULbK = await REXUNIFINANCEGhRkijm.increaseApproval.call(addressItSzxb, uintO86Vpky, {from: accounts[5]});
		const boolNPSsCXR = await REXUNIFINANCEGhRkijm.decreaseApproval.call(addressh3RpxUo, uintbJGAg0, {from: accounts[2]});
//		const booleY85yTP = await REXUNIFINANCEGhRkijm.approve.call(addressLiV8RVm, uintIBt3TPB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNPSsCXR, true)
		assert.equal(boolYhaezXV, true)
		assert.equal(booliGEhHHf, true)
		assert.equal(boolwHoULbK, true)
		await expect(REXUNIFINANCEGhRkijm.approve.call(addressLiV8RVm, uintIBt3TPB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCESsUE3g = await REXUNIFINANCE.new({from: accounts[4]});
		const uintS9IrPzW = BigInt("925")
		const addressx7MKzBI = accounts[1]
		const uint730xg6 = BigInt("51")
		const addressmoOOb1k = accounts[1]
		const addressly0bC5W = accounts[4]
		const uintOfp99aA = BigInt("527")
		const addressGSw1EC = accounts[5]
		const uintZ83Y1i9 = BigInt("416")
		const addressDdQ2ibU = accounts[2]
		const addressZtsv3qK = accounts[4]
		const addresstovaHwj = accounts[2]
		const boolZkFlGVQ = await REXUNIFINANCESsUE3g.approve.call(addressx7MKzBI, uintS9IrPzW, {from: accounts[2]});
		const boolvhvyEqs = await REXUNIFINANCESsUE3g.increaseApproval.call(addressmoOOb1k, uint730xg6, {from: accounts[2]});
		const uint256r5sEPPw = await REXUNIFINANCESsUE3g.transferableTokens.call(addressly0bC5W, {from: accounts[3]});
		const boolh1kQIrk = await REXUNIFINANCESsUE3g.decreaseApproval.call(addressGSw1EC, uintOfp99aA, {from: accounts[3]});
//		const boolt3KbbPP = await REXUNIFINANCESsUE3g.transferFrom.call(addressZtsv3qK, addressDdQ2ibU, uintZ83Y1i9, {from: accounts[4]});
//		const uint256SM0Xsar = await REXUNIFINANCESsUE3g.transferableTokens.call(addresstovaHwj, {from: accounts[1]});

		assert.equal(boolZkFlGVQ, true)
		assert.equal(boolh1kQIrk, true)
		assert.equal(boolvhvyEqs, true)
		assert.equal(uint256r5sEPPw, BigInt("0"))
		await expect(REXUNIFINANCESsUE3g.transferFrom.call(addressZtsv3qK, addressDdQ2ibU, uintZ83Y1i9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEv1eODbD = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uint7bphXN = BigInt("787")
		const addressZKe6MBB = accounts[0]
		const uintQQAa147 = BigInt("1098")
		const addressL0ULAXN = accounts[0]
		const addresst3BrORg = accounts[2]
		const uintfjsyOw9 = BigInt("1088")
		const addressuVdZAze = accounts[1]
		const uintW4DaILs = BigInt("1531")
		const addressqe5gaxg = accounts[3]
		const uintmcmXnNk = BigInt("1582")
		const addressN6CGlA2 = accounts[5]
		const booli6qAwFz = await REXUNIFINANCEv1eODbD.increaseApproval.call(addressZKe6MBB, uint7bphXN, {from: accounts[2]});
		const boolDxoUKF6 = await REXUNIFINANCEv1eODbD.transferFrom.call(addresst3BrORg, addressL0ULAXN, uintQQAa147, {from: accounts[4]});
		const boolpAsJp1i = await REXUNIFINANCEv1eODbD.increaseApproval.call(addressuVdZAze, uintfjsyOw9, {from: accounts[4]});
		const boolJPXhiLI = await REXUNIFINANCEv1eODbD.approve.call(addressqe5gaxg, uintW4DaILs, {from: accounts[4]});
		const boolsaNjzbb = await REXUNIFINANCEv1eODbD.approve.call(addressN6CGlA2, uintmcmXnNk, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCExRwYc1S = await REXUNIFINANCE.new({from: accounts[5]});
		const uintxcLBzl3 = BigInt("1995")
		const addressKAbUL6 = accounts[2]
		const uinthP7rRUU = BigInt("1962")
		const addresssmk3S7 = accounts[0]
		const addressIrWf4NE = accounts[0]
		const addresspOUkpX8 = accounts[4]
		const boolNpCyvTD = await REXUNIFINANCExRwYc1S.decreaseApproval.call(addressKAbUL6, uintxcLBzl3, {from: accounts[4]});
//		const boolGBQbm1 = await REXUNIFINANCExRwYc1S.transfer.call(addresssmk3S7, uinthP7rRUU, {from: accounts[2]});
//		const uint256y2xGvu = await REXUNIFINANCExRwYc1S.balanceOf.call(addressIrWf4NE, {from: accounts[3]});
//		const uint256xxC806 = await REXUNIFINANCExRwYc1S.balanceOf.call(addresspOUkpX8, {from: accounts[1]});

		assert.equal(boolNpCyvTD, true)
		await expect(REXUNIFINANCExRwYc1S.transfer.call(addresssmk3S7, uinthP7rRUU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})