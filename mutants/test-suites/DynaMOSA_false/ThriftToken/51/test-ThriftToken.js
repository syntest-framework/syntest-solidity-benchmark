const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenN32bWDt = await ThriftToken.new({from: accounts[0]});
		const uinte5MqFxw = BigInt("1462")
		const addressh2OaTyN = accounts[4]
		const addressTv4KUCv = accounts[4]
		const addressHy9S5SX = accounts[4]
		const uintFv9QU0q = BigInt("176")
		const addressv5bOQil = "0x0000000000000000000000000000000000000001"
		const uintPk5jsWd = BigInt("224")
		const addresspqOW8vA = accounts[4]
		const addressxvIvozO = accounts[0]
//		const boolYxigmqw = await ThriftTokenN32bWDt.transferFrom.call(addressTv4KUCv, addressh2OaTyN, uinte5MqFxw, {from: accounts[0]});
//		const addresswOJ6Bi = await ThriftTokenN32bWDt.transferOwnership.call(addressHy9S5SX, {from: accounts[4]});
//		const boolXeYygNK = await ThriftTokenN32bWDt.increaseApproval.call(addressv5bOQil, uintFv9QU0q, {from: accounts[1]});
//		const boolQVZli0a = await ThriftTokenN32bWDt.approve.call(addresspqOW8vA, uintPk5jsWd, {from: accounts[2]});
//		const addressrwSMPMT = await ThriftTokenN32bWDt.transferOwnership.call(addressxvIvozO, {from: accounts[2]});

		await expect(ThriftTokenN32bWDt.transferFrom.call(addressTv4KUCv, addressh2OaTyN, uinte5MqFxw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenPFkdHOU = await ThriftToken.new({from: accounts[2]});
		const uintVekZTL2 = BigInt("722")
		const addressloOVCUJ = accounts[4]
		const addresshJTVVN = accounts[1]
		const uintYrC6w5f = BigInt("503")
		const addressyLzPRN5 = accounts[5]
		const addressgcNUX8E = accounts[4]
		const uintjXFpnFG = BigInt("223")
		const addressbIgdshf = accounts[0]
//		const boolYs1qTsJ = await ThriftTokenPFkdHOU.increaseApproval.call(addressloOVCUJ, uintVekZTL2, {from: accounts[4]});
//		const addressUCrQXTJ = await ThriftTokenPFkdHOU.transferOwnership.call(addresshJTVVN, {from: accounts[2]});
//		const boolPTKmDJ = await ThriftTokenPFkdHOU.transfer.call(addressyLzPRN5, uintYrC6w5f, {from: accounts[3]});
//		const addressr9cgHpH = await ThriftTokenPFkdHOU.transferOwnership.call(addressgcNUX8E, {from: accounts[0]});
//		const boolAFT3Bk = await ThriftTokenPFkdHOU.decreaseApproval.call(addressbIgdshf, uintjXFpnFG, {from: accounts[3]});

		await expect(ThriftTokenPFkdHOU.increaseApproval.call(addressloOVCUJ, uintVekZTL2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenj6s3ku8 = await ThriftToken.new({from: accounts[1]});
		const addressE7H9oU2 = accounts[1]
		const uintI63jeQf = BigInt("953")
		const addressdRNIGA = accounts[2]
		const uintGky2x1T = BigInt("1059")
		const addressRl6QoK2 = accounts[4]
		const addresswaecTk = accounts[3]
//		const addressCc4jsR3 = await ThriftTokenj6s3ku8.transferOwnership.call(addressE7H9oU2, {from: accounts[2]});
//		const boollwbwK2G = await ThriftTokenj6s3ku8.decreaseApproval.call(addressdRNIGA, uintI63jeQf, {from: accounts[4]});
//		const bool0SQup0 = await ThriftTokenj6s3ku8.transferFrom.call(addresswaecTk, addressRl6QoK2, uintGky2x1T, {from: accounts[4]});

		await expect(ThriftTokenj6s3ku8.transferOwnership.call(addressE7H9oU2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenjzaJR8B = await ThriftToken.new({from: accounts[0]});
		const uintjRfL6KU = BigInt("199")
		const addressS5vJCb3 = "0x0000000000000000000000000000000000000001"
		const uintvMoL3jK = BigInt("1397")
		const addressHnogKWj = accounts[0]
		const addressdQR41Zr = accounts[3]
		const address6ZctOd = "0x0000000000000000000000000000000000000001"
		const booloXbweUe = await ThriftTokenjzaJR8B.decreaseApproval.call(addressS5vJCb3, uintjRfL6KU, {from: accounts[0]});
//		const boolpQqexd6 = await ThriftTokenjzaJR8B.transferFrom.call(addressdQR41Zr, addressHnogKWj, uintvMoL3jK, {from: accounts[4]});
//		const addresspzBuJjB = await ThriftTokenjzaJR8B.transferOwnership.call(address6ZctOd, {from: accounts[0]});

		assert.equal(booloXbweUe, true)
		await expect(ThriftTokenjzaJR8B.transferFrom.call(addressdQR41Zr, addressHnogKWj, uintvMoL3jK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenCXgzzfp = await ThriftToken.new({from: accounts[3]});
		const addressun6JS9C = accounts[5]
		const addressTPR7dmk = accounts[5]
		const uintnetZwOE = BigInt("1547")
		const addresshsCd7M8 = accounts[0]
		const uintgzRFW5 = BigInt("1612")
		const addressu3kMOWR = accounts[3]
		const addresskgDt9R6 = "0x0000000000000000000000000000000000000001"
		const uintnkBLEDT = BigInt("854")
		const addressHoeQxWa = accounts[4]
		const uintP1EpRkx = BigInt("1434")
		const addressBzRNddz = accounts[1]
		const uint256YlG6E1o = await ThriftTokenCXgzzfp.allowance.call(addressTPR7dmk, addressun6JS9C, {from: accounts[0]});
//		const boolhq4zypP = await ThriftTokenCXgzzfp.transfer.call(addresshsCd7M8, uintnetZwOE, {from: "0x0000000000000000000000000000000000000001"});
//		const boolq3OoLIE = await ThriftTokenCXgzzfp.transferFrom.call(addresskgDt9R6, addressu3kMOWR, uintgzRFW5, {from: "0x0000000000000000000000000000000000000001"});
//		const boollNip8HA = await ThriftTokenCXgzzfp.increaseApproval.call(addressHoeQxWa, uintnkBLEDT, {from: accounts[3]});
//		const boolNRyOxHj = await ThriftTokenCXgzzfp.increaseApproval.call(addressBzRNddz, uintP1EpRkx, {from: accounts[3]});

		assert.equal(uint256YlG6E1o, BigInt("0"))
		await expect(ThriftTokenCXgzzfp.transfer.call(addresshsCd7M8, uintnetZwOE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenlQGe3kf = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintB2hvNTK = BigInt("624")
		const addressCHQPMyI = accounts[1]
		const uintdfA80Np = BigInt("1474")
		const addressd53Y6xV = accounts[5]
		const uintFpnBZ1j = BigInt("1395")
		const addressGNEgAWo = accounts[0]
		const addressyEiuuzm = "0x0000000000000000000000000000000000000001"
		const uintl2SEBs = BigInt("602")
		const addressxU91sOc = accounts[2]
		const addressfVb8CpQ = accounts[4]
		const uintk8FUlru = BigInt("1197")
		const addressaIKbRCA = accounts[3]
		const boolL28UlcG = await ThriftTokenlQGe3kf.transfer.call(addressCHQPMyI, uintB2hvNTK, {from: accounts[1]});
		const boollvB2SRm = await ThriftTokenlQGe3kf.decreaseApproval.call(addressd53Y6xV, uintdfA80Np, {from: accounts[3]});
		const boolDsLmx6M = await ThriftTokenlQGe3kf.decreaseApproval.call(addressGNEgAWo, uintFpnBZ1j, {from: accounts[5]});
		const addressfal9S9b = await ThriftTokenlQGe3kf.transferOwnership.call(addressyEiuuzm, {from: accounts[0]});
		const boolNeOa49 = await ThriftTokenlQGe3kf.transferFrom.call(addressfVb8CpQ, addressxU91sOc, uintl2SEBs, {from: "0x0000000000000000000000000000000000000001"});
		const boolgXt6muC = await ThriftTokenlQGe3kf.decreaseApproval.call(addressaIKbRCA, uintk8FUlru, {from: accounts[2]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenarwN2H = await ThriftToken.new({from: accounts[4]});
		const uintIfrmjFu = BigInt("664")
		const addressLD7CpG = accounts[1]
		const addressWhh1Evq = accounts[3]
		const addresseN8Gh8i = "0x0000000000000000000000000000000000000001"
		const addresssEXPCBc = accounts[1]
		const boolEjIJ8YW = await ThriftTokenarwN2H.approve.call(addressLD7CpG, uintIfrmjFu, {from: accounts[2]});
		const uint256pB4HFzT = await ThriftTokenarwN2H.balanceOf.call(addressWhh1Evq, {from: accounts[4]});
		const uint256SpX4NWC = await ThriftTokenarwN2H.balanceOf.call(addresseN8Gh8i, {from: "0x0000000000000000000000000000000000000001"});
		const uint256g8Azru9 = await ThriftTokenarwN2H.balanceOf.call(addresssEXPCBc, {from: accounts[3]});

		assert.equal(boolEjIJ8YW, true)
		assert.equal(uint256SpX4NWC, BigInt("0"))
		assert.equal(uint256g8Azru9, BigInt("0"))
		assert.equal(uint256pB4HFzT, BigInt("0"))
	});
})