const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITBpwTXq = await RIT.new({from: accounts[4]});
		const uintktOGxot = BigInt("405")
		const addressfqDHhEV = accounts[2]
		const addressLyJ0A1C = accounts[1]
		const addressZF3IMKy = accounts[3]
		const stringkY28ICE = await RITBpwTXq.name.call({from: accounts[2]});
		const boolFRg5DN = await RITBpwTXq.decreaseAllowance.call(addressfqDHhEV, uintktOGxot, {from: accounts[1]});
		const uint256ove8Pgo = await RITBpwTXq.allowance.call(addressZF3IMKy, addressLyJ0A1C, {from: accounts[3]});
		const uint256XSti9o5 = await RITBpwTXq.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringkY28ICE, "Real Estate Investment Token")
		await expect(RITBpwTXq.decreaseAllowance.call(addressfqDHhEV, uintktOGxot, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITSAo4oM = await RIT.new({from: accounts[3]});
		const uintA2rhVD = BigInt("1423")
		const addressRFkZbeB = accounts[0]
		const addresseYsMl9P = accounts[2]
		const uintjDEESn = BigInt("820")
		const addressEHDKUPP = accounts[1]
		const uintfnSSEJ = BigInt("186")
		const addressuXcjSZ6 = "0x0000000000000000000000000000000000000001"
		const uint256mIaE2ON = await RITSAo4oM.totalSupply.call({from: accounts[4]});
		const boolmcoZPxo = await RITSAo4oM.transferFrom.call(addresseYsMl9P, addressRFkZbeB, uintA2rhVD, {from: accounts[4]});
		const boolGmis8WP = await RITSAo4oM.transfer.call(addressEHDKUPP, uintjDEESn, {from: accounts[4]});
		const boolpTft7G = await RITSAo4oM.increaseAllowance.call(addressuXcjSZ6, uintfnSSEJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256mIaE2ON, BigInt("500000000000000000000000000"))
		await expect(RITSAo4oM.transferFrom.call(addresseYsMl9P, addressRFkZbeB, uintA2rhVD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITt64mKb2 = await RIT.new({from: accounts[0]});
		const uintub60dlz = BigInt("31")
		const addressbB4Qesw = accounts[1]
		const addressIEFjxhN = accounts[2]
		const addressHcW7cPI = accounts[4]
		const addressDSx3Esp = accounts[1]
		const boolaPV1juA = await RITt64mKb2.increaseAllowance.call(addressbB4Qesw, uintub60dlz, {from: accounts[2]});
		const uint256AJyfxwQ = await RITt64mKb2.balanceOf.call(addressIEFjxhN, {from: accounts[1]});
		const uint256V4biPzO = await RITt64mKb2.allowance.call(addressDSx3Esp, addressHcW7cPI, {from: accounts[3]});

		assert.equal(boolaPV1juA, true)
		assert.equal(uint256AJyfxwQ, BigInt("0"))
		assert.equal(uint256V4biPzO, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITxjAEQk3 = await RIT.new({from: accounts[2]});
		const uintrYS0Rgm = BigInt("248")
		const uintt1dnbRR = BigInt("574")
		const addressJrSCAz0 = accounts[5]
		const uintxe2mZo7 = BigInt("2002")
		const addressqd8CGfA = accounts[3]
		const addressw4fhIWg = accounts[0]
		const uint8HpfHBBT = await RITxjAEQk3.decimals.call({from: accounts[2]});
		const uint256yjcZYFT = await RITxjAEQk3._burn.call(uintrYS0Rgm, {from: "0x0000000000000000000000000000000000000001"});
		const boolpGRzUI = await RITxjAEQk3.transfer.call(addressJrSCAz0, uintt1dnbRR, {from: accounts[1]});
		const boolYcD5fh = await RITxjAEQk3.increaseAllowance.call(addressqd8CGfA, uintxe2mZo7, {from: accounts[1]});
		const uint256GmEZc4E = await RITxjAEQk3.balanceOf.call(addressw4fhIWg, {from: accounts[4]});

		assert.equal(uint8HpfHBBT, BigInt("18"))
		await expect(RITxjAEQk3._burn.call(uintrYS0Rgm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITpYMlyrs = await RIT.new({from: accounts[1]});
		const uintrcuSN7 = BigInt("629")
		const addressC3JDCjq = accounts[2]
		const boolcdgPmnW = await RITpYMlyrs.approve.call(addressC3JDCjq, uintrcuSN7, {from: accounts[2]});
		const stringqExKo8F = await RITpYMlyrs.symbol.call({from: accounts[3]});

		assert.equal(boolcdgPmnW, true)
		assert.equal(stringqExKo8F, "RIT 2.0")
	});

	it('test for RIT', async () => {
		const RITsdarmRD = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uint7zxVt6 = BigInt("360")
		const addresst8zUMP = accounts[3]
		const addressaderOq5 = accounts[4]
		const uintkm54VYA = BigInt("806")
		const addressdd6NIyZ = accounts[3]
		const addressC4K9Yv0 = accounts[0]
		const addressG8BTWUD = accounts[2]
		const uintzK5rKUN = BigInt("1002")
		const addressmsV4kt = "0x0000000000000000000000000000000000000001"
		const addressFy1iCh4 = accounts[0]
		const boolgluIndc = await RITsdarmRD.transferFrom.call(addressaderOq5, addresst8zUMP, uint7zxVt6, {from: "0x0000000000000000000000000000000000000001"});
		const boolycKM8qa = await RITsdarmRD.decreaseAllowance.call(addressdd6NIyZ, uintkm54VYA, {from: accounts[5]});
		const uint256k3NGlJA = await RITsdarmRD.allowance.call(addressG8BTWUD, addressC4K9Yv0, {from: accounts[4]});
		const boolza8RlfS = await RITsdarmRD.transferFrom.call(addressFy1iCh4, addressmsV4kt, uintzK5rKUN, {from: accounts[3]});
	});

	it('test for RIT', async () => {
		const RITqWKuuv = await RIT.new({from: accounts[0]});
		const uintqCR8jax = BigInt("1911")
		const addressuNSzLOe = accounts[3]
		const addresshgoE6h4 = accounts[2]
		const uintaItTuUF = BigInt("739")
		const addressqKI2zaY = "0x0000000000000000000000000000000000000001"
		const addresskhXsRlP = accounts[2]
		const uintqzrD8aQ = BigInt("740")
		const addressd6XjA21 = accounts[2]
		const uint256Sw4hZuR = await RITqWKuuv.totalSupply.call({from: accounts[0]});
		const boolsW277b = await RITqWKuuv.transfer.call(addressuNSzLOe, uintqCR8jax, {from: accounts[2]});
		const uint256Ld3O8Nd = await RITqWKuuv.balanceOf.call(addresshgoE6h4, {from: accounts[1]});
		const boolJnJvfth = await RITqWKuuv.transferFrom.call(addresskhXsRlP, addressqKI2zaY, uintaItTuUF, {from: accounts[2]});
		const stringptUY3WD = await RITqWKuuv.symbol.call({from: accounts[1]});
		const boolAY0uG8N = await RITqWKuuv.decreaseAllowance.call(addressd6XjA21, uintqzrD8aQ, {from: accounts[0]});

		assert.equal(uint256Sw4hZuR, BigInt("500000000000000000000000000"))
		await expect(RITqWKuuv.transfer.call(addressuNSzLOe, uintqCR8jax, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})