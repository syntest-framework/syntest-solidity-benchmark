const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintiA5Zz8u = BigInt("1934")
		const BancorV2_ZapIn_General_V1_1KLkqCIs = await BancorV2_ZapIn_General_V1_1.new(uintiA5Zz8u, {from: accounts[0]});
		const uintAkAjzqF = BigInt("1860")
		const addresslHCY89 = accounts[1]
		const bytedlCL3PW = "0x141f1f0b06080e131c1d151e050c0415010d190a11101f010e0608010f1f"
		const addressl3m9QX6 = accounts[2]
		const addressEJPlBbM = accounts[1]
		const uintqwIPkJw = BigInt("281")
		const uintFMawznJ = BigInt("1462")
		const addressiZKuGhj = accounts[5]
		const addressEUTostV = accounts[0]
		const addressDCLT5C = accounts[2]
		const uint16heYPHjE = await BancorV2_ZapIn_General_V1_1KLkqCIs.set_new_goodwill.call(uintAkAjzqF, {from: accounts[5]});
		const addressDPHeagC = await BancorV2_ZapIn_General_V1_1KLkqCIs.transferOwnership.call(addresslHCY89, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wKcUJM = await BancorV2_ZapIn_General_V1_1KLkqCIs.ZapInSingleSided.call(addressDCLT5C, addressEUTostV, addressiZKuGhj, uintFMawznJ, uintqwIPkJw, addressEJPlBbM, addressl3m9QX6, bytedlCL3PW, {from: accounts[2]});
		const addressn052e8Y = await BancorV2_ZapIn_General_V1_1KLkqCIs.owner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1KLkqCIs.set_new_goodwill.call(uintAkAjzqF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZdZJv9z = BigInt("1797")
		const BancorV2_ZapIn_General_V1_1PRthPCy = await BancorV2_ZapIn_General_V1_1.new(uintZdZJv9z, {from: accounts[5]});
		const addressl0x3MMl = accounts[0]
		await BancorV2_ZapIn_General_V1_1PRthPCy.onlyOwner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1PRthPCy.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressp1TUVYY = await BancorV2_ZapIn_General_V1_1PRthPCy.toPayable.call(addressl0x3MMl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1PRthPCy.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintXcmt6xJ = BigInt("1104")
		const BancorV2_ZapIn_General_V1_1K9ATfHB = await BancorV2_ZapIn_General_V1_1.new(uintXcmt6xJ, {from: accounts[4]});
		const addressz9OeyTO = await BancorV2_ZapIn_General_V1_1K9ATfHB.owner.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.toggleContractActive.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.withdraw.call({from: accounts[2]});

		assert.equal(addressz9OeyTO, 0x9ECf39fDC8b0Ff0eEC368Aecb342F01bD685E851)
		await expect(BancorV2_ZapIn_General_V1_1K9ATfHB.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintRuZacfr = BigInt("1104")
		const BancorV2_ZapIn_General_V1_1K9ATfHB = await BancorV2_ZapIn_General_V1_1.new(uintRuZacfr, {from: accounts[4]});
		const addressoOxOSxa = accounts[4]
		const addresscotgMsy = await BancorV2_ZapIn_General_V1_1K9ATfHB.transferOwnership.call(addressoOxOSxa, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.withdraw.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.toggleContractActive.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1K9ATfHB.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintv0HW4vZ = BigInt("61")
		const BancorV2_ZapIn_General_V1_1t8ZZHN = await BancorV2_ZapIn_General_V1_1.new(uintv0HW4vZ, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1t8ZZHN.renounceOwnership.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1t8ZZHN.onlyOwner.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1t8ZZHN.nonReentrant.call({from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxmZQW2B = BigInt("1104")
		const BancorV2_ZapIn_General_V1_1K9ATfHB = await BancorV2_ZapIn_General_V1_1.new(uintxmZQW2B, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.toggleContractActive.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.withdraw.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1K9ATfHB.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintfwbqIRn = BigInt("180")
		const BancorV2_ZapIn_General_V1_1rk2syqR = await BancorV2_ZapIn_General_V1_1.new(uintfwbqIRn, {from: accounts[5]});
		const byteYAiUcB = "0x04081506"
		const addressxCbkEhU = accounts[2]
		const addressDEduC2O = accounts[0]
		const uintUsMzMIY = BigInt("1129")
		const uintHwLJTQf = BigInt("1480")
		const addresslys8Yl5 = accounts[3]
		const addressnW6XO5y = "0x0000000000000000000000000000000000000001"
		const addressj89Imrt = accounts[0]
		const addressbhIkKi = accounts[0]
		const uint256QIM9rBd = await BancorV2_ZapIn_General_V1_1rk2syqR.ZapInSingleSided.call(addressj89Imrt, addressnW6XO5y, addresslys8Yl5, uintHwLJTQf, uintUsMzMIY, addressDEduC2O, addressxCbkEhU, byteYAiUcB, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1rk2syqR.toggleContractActive.call({from: accounts[3]});
		const boolTA4ZP2K = await BancorV2_ZapIn_General_V1_1rk2syqR.isOwner.call({from: accounts[1]});
		const addressqe8pst = await BancorV2_ZapIn_General_V1_1rk2syqR.toPayable.call(addressbhIkKi, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1rk2syqR.ZapInSingleSided.call(addressj89Imrt, addressnW6XO5y, addresslys8Yl5, uintHwLJTQf, uintUsMzMIY, addressDEduC2O, addressxCbkEhU, byteYAiUcB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQAURuYQ = BigInt("1104")
		const BancorV2_ZapIn_General_V1_1K9ATfHB = await BancorV2_ZapIn_General_V1_1.new(uintQAURuYQ, {from: accounts[4]});
		const addresskppBwu3 = accounts[2]
		const uintYvK3Y7A = BigInt("1549")
		const addressoHE2Pm = await BancorV2_ZapIn_General_V1_1K9ATfHB.inCaseTokengetsStuck.call(addresskppBwu3, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.withdraw.call({from: accounts[2]});
		const uint16ajPnWM8 = await BancorV2_ZapIn_General_V1_1K9ATfHB.set_new_goodwill.call(uintYvK3Y7A, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1K9ATfHB.inCaseTokengetsStuck.call(addresskppBwu3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxfPTrqR = BigInt("1104")
		const BancorV2_ZapIn_General_V1_1K9ATfHB = await BancorV2_ZapIn_General_V1_1.new(uintxfPTrqR, {from: accounts[4]});
		const byter1mDvc = "0x01060418171e081a04030e1b1e0607150518141e1800160601180101"
		const addressK51AIcV = accounts[1]
		const addressNs4jBiB = accounts[3]
		const uintJgX95yR = BigInt("1637")
		const uintIhpYuLD = BigInt("983")
		const addressCMjxMAb = "0x0000000000000000000000000000000000000001"
		const addressAcbp1iW = accounts[2]
		const addressesNQj1n = accounts[0]
		await BancorV2_ZapIn_General_V1_1K9ATfHB.renounceOwnership.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.nonReentrant.call({from: accounts[2]});
		const uint256CRGUYjg = await BancorV2_ZapIn_General_V1_1K9ATfHB.ZapInSingleSided.call(addressesNQj1n, addressAcbp1iW, addressCMjxMAb, uintIhpYuLD, uintJgX95yR, addressNs4jBiB, addressK51AIcV, byter1mDvc, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.withdraw.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.renounceOwnership.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1K9ATfHB.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintMYA52c4 = BigInt("1104")
		const BancorV2_ZapIn_General_V1_1K9ATfHB = await BancorV2_ZapIn_General_V1_1.new(uintMYA52c4, {from: accounts[4]});
		const uintCeYDDcp = BigInt("495")
		const uint16Gsmy5d3 = await BancorV2_ZapIn_General_V1_1K9ATfHB.set_new_goodwill.call(uintCeYDDcp, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1K9ATfHB.withdraw.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1K9ATfHB.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintLvdzNx7 = BigInt("1235")
		const BancorV2_ZapIn_General_V1_1Qmttzfw = await BancorV2_ZapIn_General_V1_1.new(uintLvdzNx7, {from: accounts[4]});
		const uintSyLdKQK = BigInt("1167")
		await BancorV2_ZapIn_General_V1_1Qmttzfw.withdraw.call({from: accounts[4]});
		const uint16KFcHZs = await BancorV2_ZapIn_General_V1_1Qmttzfw.set_new_goodwill.call(uintSyLdKQK, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1Qmttzfw.toggleContractActive.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1Qmttzfw.nonReentrant.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1Qmttzfw.stopInEmergency.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1Qmttzfw.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})