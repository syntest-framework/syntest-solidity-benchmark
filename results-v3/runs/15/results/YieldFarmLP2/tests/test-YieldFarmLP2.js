const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2QRB8BrE = await YieldFarmLP2.new({from: accounts[4]});
		const uintajewmQE = BigInt("1624")
		const addressWDtxW04 = accounts[0]
		const uintIXT0gRE = BigInt("610")
		const addressKaHZyIP = accounts[3]
		const addressuiBaIM = accounts[1]
		const addressYTxKME0 = accounts[4]
		const addressmXrWx0 = accounts[4]
		const uintOyglao = await YieldFarmLP2QRB8BrE.getEpochStake.call(addressWDtxW04, uintajewmQE, {from: accounts[0]});
		const uint6PczbQ = await YieldFarmLP2QRB8BrE.getPoolSize.call(uintIXT0gRE, {from: accounts[5]});
		const uintSKfzb2O = await YieldFarmLP2QRB8BrE.massHarvest.call({from: accounts[4]});
		const addressMQNxPi7 = await YieldFarmLP2QRB8BrE.initialize.call(addressmXrWx0, addressYTxKME0, addressuiBaIM, addressKaHZyIP, {from: accounts[2]});
		const uintnINNVOA = await YieldFarmLP2QRB8BrE.massHarvest.call({from: accounts[5]});

		await expect(YieldFarmLP2QRB8BrE.getEpochStake.call(addressWDtxW04, uintajewmQE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZSnvfcb = await YieldFarmLP2.new({from: accounts[2]});
		const uintwfRd5D3 = BigInt("292")
		const uintXRScHNK = BigInt("32")
		const addressjA9KLyR = accounts[0]
		const addresszBPwpVB = accounts[1]
		const uintiYkykil = await YieldFarmLP2ZSnvfcb.massHarvest.call({from: accounts[3]});
		const uintyQEQ6Kl = await YieldFarmLP2ZSnvfcb.getCurrentEpoch.call({from: accounts[0]});
		const uintTcfLEvt = await YieldFarmLP2ZSnvfcb.harvest.call(uintwfRd5D3, {from: accounts[3]});
		const uintjm8wY0F = await YieldFarmLP2ZSnvfcb.getEpochStake.call(addressjA9KLyR, uintXRScHNK, {from: accounts[0]});
		const uintzVdcE3C = await YieldFarmLP2ZSnvfcb.claimable.call(addresszBPwpVB, {from: accounts[2]});

		await expect(YieldFarmLP2ZSnvfcb.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UdKB0Yo = await YieldFarmLP2.new({from: accounts[3]});
		const uintRICuVND = BigInt("378")
		const addresss8juVjU = "0x0000000000000000000000000000000000000001"
		const uintgAl3kwG = BigInt("1033")
		const uintGgwvyl0 = BigInt("917")
		const uintPXKqoB = BigInt("1784")
		const uintDeetePn = await YieldFarmLP2UdKB0Yo.getPoolSize.call(uintRICuVND, {from: accounts[0]});
		const uintmenW8DO = await YieldFarmLP2UdKB0Yo.claimable.call(addresss8juVjU, {from: accounts[2]});
		const uintE3NaKuJ = await YieldFarmLP2UdKB0Yo.getPoolSize.call(uintgAl3kwG, {from: accounts[0]});
		const uinttAF2aC1 = await YieldFarmLP2UdKB0Yo.getPoolSize.call(uintGgwvyl0, {from: accounts[2]});
		const uintNDOort2 = await YieldFarmLP2UdKB0Yo.harvest.call(uintPXKqoB, {from: accounts[2]});

		await expect(YieldFarmLP2UdKB0Yo.getPoolSize.call(uintRICuVND, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MkVNlvM = await YieldFarmLP2.new({from: accounts[3]});
		const uintP9sWkpQ = BigInt("1544")
		const uintXuQ9p2P = await YieldFarmLP2MkVNlvM.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
		const uintdMT1X6 = await YieldFarmLP2MkVNlvM.getPoolSize.call(uintP9sWkpQ, {from: accounts[4]});
		const uintdv6lqcu = await YieldFarmLP2MkVNlvM.getCurrentEpoch.call({from: accounts[3]});

		await expect(YieldFarmLP2MkVNlvM.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MFicLSN = await YieldFarmLP2.new({from: accounts[3]});
		const addressrcFNpJx = accounts[4]
		const addressRWG5lSR = accounts[4]
		const uintfbBwA8H = BigInt("1850")
		const uintR4kTeGn = BigInt("319")
		const addressMB26hhj = accounts[2]
		const uintzVSZLY7 = await YieldFarmLP2MFicLSN.claimable.call(addressrcFNpJx, {from: accounts[1]});
		const uintQiFTvqG = await YieldFarmLP2MFicLSN.claimable.call(addressRWG5lSR, {from: accounts[4]});
		const uintny03Jna = await YieldFarmLP2MFicLSN.getPoolSize.call(uintfbBwA8H, {from: accounts[2]});
		const uintnGQqJtj = await YieldFarmLP2MFicLSN.userLastEpochIdHarvested.call({from: accounts[3]});
		const uintRmerxcf = await YieldFarmLP2MFicLSN.getEpochStake.call(addressMB26hhj, uintR4kTeGn, {from: accounts[4]});
		const uintDxIhMag = await YieldFarmLP2MFicLSN.massHarvest.call({from: accounts[2]});

		await expect(YieldFarmLP2MFicLSN.claimable.call(addressrcFNpJx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZSnvfcb = await YieldFarmLP2.new({from: accounts[2]});
		const uinthYBLLQh = BigInt("75")
		const uintvoGG3vx = BigInt("837")
		const uintIdmpdiz = BigInt("292")
		const uintQamibBj = BigInt("32")
		const addressA91q4q9 = accounts[1]
		const addressB4lfwh = accounts[1]
		const uintA8VoiJN = await YieldFarmLP2ZSnvfcb.harvest.call(uinthYBLLQh, {from: accounts[2]});
		const uintmPM2Kxg = await YieldFarmLP2ZSnvfcb.getCurrentEpoch.call({from: accounts[0]});
		const uintwyB3RjY = await YieldFarmLP2ZSnvfcb.getCurrentEpoch.call({from: accounts[4]});
		const uintGzPaEc = await YieldFarmLP2ZSnvfcb.getPoolSize.call(uintvoGG3vx, {from: accounts[3]});
		const uintDTFuBGN = await YieldFarmLP2ZSnvfcb.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
		const uintiYkykil = await YieldFarmLP2ZSnvfcb.massHarvest.call({from: accounts[3]});
		const uintyQEQ6Kl = await YieldFarmLP2ZSnvfcb.getCurrentEpoch.call({from: accounts[0]});
		const uintTcfLEvt = await YieldFarmLP2ZSnvfcb.harvest.call(uintIdmpdiz, {from: accounts[3]});
		const uintjm8wY0F = await YieldFarmLP2ZSnvfcb.getEpochStake.call(addressA91q4q9, uintQamibBj, {from: accounts[0]});
		const uintzVdcE3C = await YieldFarmLP2ZSnvfcb.claimable.call(addressB4lfwh, {from: accounts[2]});

		await expect(YieldFarmLP2ZSnvfcb.harvest.call(uinthYBLLQh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2OgAXCJ8 = await YieldFarmLP2.new({from: accounts[2]});
		const addressuTh8IeO = accounts[3]
		const addressMqE1h2R = accounts[2]
		const uintqj8eB8S = BigInt("1460")
		const uintyA8nLVb = await YieldFarmLP2OgAXCJ8.userLastEpochIdHarvested.call({from: accounts[2]});
		const uintd2dCTvg = await YieldFarmLP2OgAXCJ8.claimable.call(addressuTh8IeO, {from: accounts[2]});
		const uintO8aEcG7 = await YieldFarmLP2OgAXCJ8.claimable.call(addressMqE1h2R, {from: accounts[4]});
		const uintHhcKxcL = await YieldFarmLP2OgAXCJ8.getPoolSize.call(uintqj8eB8S, {from: accounts[0]});
		const uintiihw79C = await YieldFarmLP2OgAXCJ8.getCurrentEpoch.call({from: accounts[5]});

		assert.equal(uintyA8nLVb, BigInt("0"))
		await expect(YieldFarmLP2OgAXCJ8.claimable.call(addressuTh8IeO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2U97mEzv = await YieldFarmLP2.new({from: accounts[4]});
		const addressU7sX8fY = accounts[2]
		const addressSajx8Lk = accounts[4]
		const addresscCCTCAU = accounts[4]
		const addressYSdHq7Z = accounts[3]
		const uintWkpE34W = BigInt("1142")
		const uintNYjrMMm = BigInt("815")
		const addressIUWeVQj = await YieldFarmLP2U97mEzv.initialize.call(addressYSdHq7Z, addresscCCTCAU, addressSajx8Lk, addressU7sX8fY, {from: accounts[1]});
		const uintELRzwea = await YieldFarmLP2U97mEzv.getPoolSize.call(uintWkpE34W, {from: accounts[3]});
		const uintCkBjPwL = await YieldFarmLP2U97mEzv.userLastEpochIdHarvested.call({from: accounts[4]});
		const uintV9AKLVI = await YieldFarmLP2U97mEzv.getCurrentEpoch.call({from: accounts[5]});
		const uintRGIceF8 = await YieldFarmLP2U97mEzv.harvest.call(uintNYjrMMm, {from: accounts[0]});

		await expect(YieldFarmLP2U97mEzv.initialize.call(addressYSdHq7Z, addresscCCTCAU, addressSajx8Lk, addressU7sX8fY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2GYJ6jAb = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrfSVR5k = BigInt("644")
		const addressWuwdFsG = accounts[3]
		const uints3jdmGQ = BigInt("457")
		const addressS224n0 = accounts[0]
		const addressZzwlzOg = accounts[1]
		const addressYclV2Dw = accounts[4]
		const addresszKzRDOd = accounts[3]
		const uinthiUNwG2 = BigInt("285")
		const addresspDFZ08 = accounts[3]
		const uintwP5Siuj = await YieldFarmLP2GYJ6jAb.getEpochStake.call(addressWuwdFsG, uintrfSVR5k, {from: accounts[1]});
		const uintUHvkZBq = await YieldFarmLP2GYJ6jAb.harvest.call(uints3jdmGQ, {from: accounts[2]});
		const addressgRzsJSJ = await YieldFarmLP2GYJ6jAb.initialize.call(addresszKzRDOd, addressYclV2Dw, addressZzwlzOg, addressS224n0, {from: accounts[0]});
		const uintKm2MmGf = await YieldFarmLP2GYJ6jAb.getPoolSize.call(uinthiUNwG2, {from: accounts[0]});
		const uintHqUUotC = await YieldFarmLP2GYJ6jAb.claimable.call(addresspDFZ08, {from: accounts[1]});
	});
})