const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintNcvUb1 = BigInt("223")
		const BancorV2_ZapIn_General_V1_1OuJOpv = await BancorV2_ZapIn_General_V1_1.new(uintNcvUb1, {from: accounts[3]});
		const byteO47sHis = "0x111616120f020e14070b0418151a0e"
		const addresslzUrsNe = accounts[0]
		const addressFUW2Sml = accounts[2]
		const uintXM8twj = BigInt("1373")
		const uintszeGzux = BigInt("1376")
		const addresstYDsYuu = accounts[2]
		const addressnnAbumo = accounts[2]
		const addressCyz3y5Z = accounts[1]
		const addresseiB1dxt = accounts[2]
//		const uint256tTJYco5 = await BancorV2_ZapIn_General_V1_1OuJOpv.ZapInSingleSided.call(addressCyz3y5Z, addressnnAbumo, addresstYDsYuu, uintszeGzux, uintXM8twj, addressFUW2Sml, addresslzUrsNe, byteO47sHis, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1OuJOpv.withdraw.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1OuJOpv.nonReentrant.call({from: accounts[3]});
//		const addressA4utO3T = await BancorV2_ZapIn_General_V1_1OuJOpv.inCaseTokengetsStuck.call(addresseiB1dxt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1OuJOpv.ZapInSingleSided.call(addressCyz3y5Z, addressnnAbumo, addresstYDsYuu, uintszeGzux, uintXM8twj, addressFUW2Sml, addresslzUrsNe, byteO47sHis, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxv8WYaM = BigInt("1929")
		const BancorV2_ZapIn_General_V1_1kF5dSs = await BancorV2_ZapIn_General_V1_1.new(uintxv8WYaM, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1kF5dSs.renounceOwnership.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1kF5dSs.onlyOwner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1kF5dSs.toggleContractActive.call({from: accounts[2]});
//		const boolZC5RcJm = await BancorV2_ZapIn_General_V1_1kF5dSs.isOwner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1kF5dSs.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZieTQ5s = BigInt("1587")
		const BancorV2_ZapIn_General_V1_1p6Z9NgD = await BancorV2_ZapIn_General_V1_1.new(uintZieTQ5s, {from: accounts[3]});
		const addressJkGUJpX = accounts[0]
//		const addressvP7RhhB = await BancorV2_ZapIn_General_V1_1p6Z9NgD.toPayable.call(addressJkGUJpX, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1p6Z9NgD.onlyOwner.call({from: accounts[5]});
//		const boolS8DeIwZ = await BancorV2_ZapIn_General_V1_1p6Z9NgD.isOwner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1p6Z9NgD.toPayable.call(addressJkGUJpX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQ2aFuP = BigInt("1282")
		const BancorV2_ZapIn_General_V1_1IG56yWj = await BancorV2_ZapIn_General_V1_1.new(uintQ2aFuP, {from: accounts[1]});
		const bytecby6AvB = "0x101611150e0d0d1b190c0b100d011d110308191a201201"
		const addressmoD74Io = accounts[2]
		const addressX4wGdY9 = accounts[2]
		const uintKhH0rdv = BigInt("1196")
		const uintMoL75Ga = BigInt("241")
		const addressdPLNqqw = accounts[3]
		const addressm5HNMsC = accounts[1]
		const addressDuTySH = accounts[1]
		const addresslj1V1bw = accounts[2]
		const addressLOvOkIe = await BancorV2_ZapIn_General_V1_1IG56yWj.owner.call({from: accounts[2]});
//		const uint256ZkjYXwa = await BancorV2_ZapIn_General_V1_1IG56yWj.ZapInSingleSided.call(addressDuTySH, addressm5HNMsC, addressdPLNqqw, uintMoL75Ga, uintKhH0rdv, addressX4wGdY9, addressmoD74Io, bytecby6AvB, {from: accounts[1]});
//		const addressWwBbBy9 = await BancorV2_ZapIn_General_V1_1IG56yWj.toPayable.call(addresslj1V1bw, {from: accounts[0]});

		assert.equal(addressLOvOkIe, 0xBa9A07066d2989C8E20a6c367cacA35Ca5e5D404)
		await expect(BancorV2_ZapIn_General_V1_1IG56yWj.ZapInSingleSided.call(addressDuTySH, addressm5HNMsC, addressdPLNqqw, uintMoL75Ga, uintKhH0rdv, addressX4wGdY9, addressmoD74Io, bytecby6AvB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintA9EWdvc = BigInt("643")
		const BancorV2_ZapIn_General_V1_1Vfhrpcf = await BancorV2_ZapIn_General_V1_1.new(uintA9EWdvc, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1Vfhrpcf.renounceOwnership.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1Vfhrpcf.onlyOwner.call({from: accounts[0]});
//		const addressBbNN3L9 = await BancorV2_ZapIn_General_V1_1Vfhrpcf.owner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1Vfhrpcf.toggleContractActive.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1Vfhrpcf.onlyOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1Vfhrpcf.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintpTFmLj = BigInt("1282")
		const BancorV2_ZapIn_General_V1_1IG56yWj = await BancorV2_ZapIn_General_V1_1.new(uintpTFmLj, {from: accounts[1]});
		const uintyEaieJD = BigInt("1260")
		const addressuDRwvZa = accounts[2]
//		await BancorV2_ZapIn_General_V1_1IG56yWj.withdraw.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1IG56yWj.nonReentrant.call({from: accounts[1]});
//		const addressLOvOkIe = await BancorV2_ZapIn_General_V1_1IG56yWj.owner.call({from: accounts[2]});
//		const uint16PJPJsq = await BancorV2_ZapIn_General_V1_1IG56yWj.set_new_goodwill.call(uintyEaieJD, {from: accounts[2]});
//		const addressWwBbBy9 = await BancorV2_ZapIn_General_V1_1IG56yWj.toPayable.call(addressuDRwvZa, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1IG56yWj.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintaKt2OaA = BigInt("1282")
		const BancorV2_ZapIn_General_V1_1IG56yWj = await BancorV2_ZapIn_General_V1_1.new(uintaKt2OaA, {from: accounts[1]});
		const uintjFPfhuR = BigInt("1251")
		const byteVYGqPOW = "0x101611150e090d1b190c0b100d011d110308191a201201"
		const addressTpdle34 = accounts[2]
		const addressvlo0oKF = accounts[2]
		const uintpLFpon = BigInt("1196")
		const uintjYa6igG = BigInt("241")
		const addressXArwzB = accounts[3]
		const addressL7gD1GT = accounts[1]
		const addressP6U0es = accounts[1]
		const uint16MBJn8pe = await BancorV2_ZapIn_General_V1_1IG56yWj.set_new_goodwill.call(uintjFPfhuR, {from: accounts[1]});
//		const uint256ZkjYXwa = await BancorV2_ZapIn_General_V1_1IG56yWj.ZapInSingleSided.call(addressP6U0es, addressL7gD1GT, addressXArwzB, uintjYa6igG, uintpLFpon, addressvlo0oKF, addressTpdle34, byteVYGqPOW, {from: accounts[1]});
//		const addressR8kDKmx = await BancorV2_ZapIn_General_V1_1IG56yWj.owner.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1IG56yWj.ZapInSingleSided.call(addressP6U0es, addressL7gD1GT, addressXArwzB, uintjYa6igG, uintpLFpon, addressvlo0oKF, addressTpdle34, byteVYGqPOW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintFy6CSlY = BigInt("1282")
		const BancorV2_ZapIn_General_V1_1IG56yWj = await BancorV2_ZapIn_General_V1_1.new(uintFy6CSlY, {from: accounts[1]});
		const byteg2sH9Bh = "0x101611150e090d1b190c0b100d011d110308191a201201"
		const addressdgZXPZs = accounts[2]
		const addressF94fu3y = accounts[2]
		const uintg121Fqf = BigInt("1223")
		const uinteMiDyrd = BigInt("241")
		const addresswZOZfm5 = accounts[3]
		const addressCYWyqkG = accounts[1]
		const addressMGQTKy6 = accounts[1]
//		await BancorV2_ZapIn_General_V1_1IG56yWj.toggleContractActive.call({from: accounts[1]});
//		const uint256ZkjYXwa = await BancorV2_ZapIn_General_V1_1IG56yWj.ZapInSingleSided.call(addressMGQTKy6, addressCYWyqkG, addresswZOZfm5, uinteMiDyrd, uintg121Fqf, addressF94fu3y, addressdgZXPZs, byteg2sH9Bh, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1IG56yWj.toggleContractActive.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintyuUVdkD = BigInt("76")
		const BancorV2_ZapIn_General_V1_1ACRBRHb = await BancorV2_ZapIn_General_V1_1.new(uintyuUVdkD, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1ACRBRHb.renounceOwnership.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1ACRBRHb.toggleContractActive.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1ACRBRHb.stopInEmergency.call({from: accounts[3]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintbEPIrSn = BigInt("1775")
		const BancorV2_ZapIn_General_V1_1ux4yuHu = await BancorV2_ZapIn_General_V1_1.new(uintbEPIrSn, {from: accounts[3]});
		const addresszTItKib = accounts[0]
		const addressEShycsw = accounts[4]
		const addressIFWR0Cy = await BancorV2_ZapIn_General_V1_1ux4yuHu.transferOwnership.call(addresszTItKib, {from: accounts[3]});
//		const addressSBF8vpk = await BancorV2_ZapIn_General_V1_1ux4yuHu.toPayable.call(addressEShycsw, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1ux4yuHu.toPayable.call(addressEShycsw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZTcdH2 = BigInt("1282")
		const BancorV2_ZapIn_General_V1_1IG56yWj = await BancorV2_ZapIn_General_V1_1.new(uintZTcdH2, {from: accounts[1]});
		const addresspthqGCB = accounts[1]
		const address6vCmeS = "0x0000000000000000000000000000000000000001"
		const byteRgIvHY = "0x101611150e090d1b190c0b100d011d110308191a201201"
		const addressZHiUEb5 = accounts[2]
		const addressbG3mUzL = accounts[2]
		const uintNp8WSR = BigInt("1196")
		const uintmh1iM1 = BigInt("2009")
		const addressWgPLFAg = accounts[3]
		const addressUF6bNRu = accounts[1]
		const addresssQNW7Qm = accounts[1]
//		const addressNjK1zfw = await BancorV2_ZapIn_General_V1_1IG56yWj.inCaseTokengetsStuck.call(addresspthqGCB, {from: accounts[1]});
//		const addressw7y5kKf = await BancorV2_ZapIn_General_V1_1IG56yWj.inCaseTokengetsStuck.call(address6vCmeS, {from: accounts[0]});
//		const uint256ZkjYXwa = await BancorV2_ZapIn_General_V1_1IG56yWj.ZapInSingleSided.call(addresssQNW7Qm, addressUF6bNRu, addressWgPLFAg, uintmh1iM1, uintNp8WSR, addressbG3mUzL, addressZHiUEb5, byteRgIvHY, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1IG56yWj.inCaseTokengetsStuck.call(addresspthqGCB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})