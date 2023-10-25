const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintEmewguV = BigInt("1366")
		const BancorV2_ZapIn_General_V1_1r6OyrI5 = await BancorV2_ZapIn_General_V1_1.new(uintEmewguV, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1r6OyrI5.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1r6OyrI5.renounceOwnership.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1r6OyrI5.onlyOwner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1r6OyrI5.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintsLJ11K0 = BigInt("1335")
		const BancorV2_ZapIn_General_V1_1pF3pPIt = await BancorV2_ZapIn_General_V1_1.new(uintsLJ11K0, {from: accounts[4]});
		const uintUFDVYrz = BigInt("1129")
		const uintaQstZum = BigInt("1786")
		const uint16u4Y6f8 = await BancorV2_ZapIn_General_V1_1pF3pPIt.set_new_goodwill.call(uintUFDVYrz, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1pF3pPIt.withdraw.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1pF3pPIt.stopInEmergency.call({from: accounts[2]});
//		const uint16NIlxYMC = await BancorV2_ZapIn_General_V1_1pF3pPIt.set_new_goodwill.call(uintaQstZum, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1pF3pPIt.toggleContractActive.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1pF3pPIt.toggleContractActive.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1pF3pPIt.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintaLjPOp = BigInt("789")
		const BancorV2_ZapIn_General_V1_1HW9HjoK = await BancorV2_ZapIn_General_V1_1.new(uintaLjPOp, {from: "0x0000000000000000000000000000000000000001"});
		const byte8juE78 = "0x05091d190611000a141c01060c07160005180d130314131913190814031e1904"
		const addressJKT7e8 = accounts[4]
		const addressMcveO7h = accounts[5]
		const uintvD5Dj62 = BigInt("1305")
		const uintOb7ASzu = BigInt("340")
		const addresscNYofqv = accounts[0]
		const addressrn2tGm3 = accounts[4]
		const addressh17jwJ0 = "0x0000000000000000000000000000000000000001"
		const uintqrMD0xD = BigInt("1981")
		const uint256yzAa0c = await BancorV2_ZapIn_General_V1_1HW9HjoK.ZapInSingleSided.call(addressh17jwJ0, addressrn2tGm3, addresscNYofqv, uintOb7ASzu, uintvD5Dj62, addressMcveO7h, addressJKT7e8, byte8juE78, {from: accounts[4]});
		const addressM78gJXg = await BancorV2_ZapIn_General_V1_1HW9HjoK.owner.call({from: accounts[2]});
		const uint16FgZ6eT = await BancorV2_ZapIn_General_V1_1HW9HjoK.set_new_goodwill.call(uintqrMD0xD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintOqCxouG = BigInt("1616")
		const BancorV2_ZapIn_General_V1_1XzpbsO8 = await BancorV2_ZapIn_General_V1_1.new(uintOqCxouG, {from: accounts[2]});
		const byteDqjkNWQ = "0x19030f1a1c120a0809"
		const addressFkY7MEN = accounts[1]
		const addressKCPXFR6 = accounts[4]
		const uintQZEp18C = BigInt("1249")
		const uintkQ9MaE = BigInt("390")
		const addressY3wMBHy = "0x0000000000000000000000000000000000000001"
		const addresslBvUM2H = accounts[4]
		const addressFpK6QiS = accounts[3]
		const byteGR6UGVU = "0x1b121d0e161d0707140c"
		const addressfixom9g = accounts[3]
		const addresslnIKFdR = accounts[4]
		const uintl8ZLXyv = BigInt("1900")
		const uintjbczNC5 = BigInt("871")
		const addressAQOJfQ = accounts[4]
		const addressFdH9gpi = accounts[1]
		const addressYfG77Kz = accounts[2]
//		const uint256yDE87Mg = await BancorV2_ZapIn_General_V1_1XzpbsO8.ZapInSingleSided.call(addressFpK6QiS, addresslBvUM2H, addressY3wMBHy, uintkQ9MaE, uintQZEp18C, addressKCPXFR6, addressFkY7MEN, byteDqjkNWQ, {from: accounts[2]});
//		const addressML5HaHu = await BancorV2_ZapIn_General_V1_1XzpbsO8.owner.call({from: accounts[4]});
//		const uint256N8N3hLy = await BancorV2_ZapIn_General_V1_1XzpbsO8.ZapInSingleSided.call(addressYfG77Kz, addressFdH9gpi, addressAQOJfQ, uintjbczNC5, uintl8ZLXyv, addresslnIKFdR, addressfixom9g, byteGR6UGVU, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1XzpbsO8.ZapInSingleSided.call(addressFpK6QiS, addresslBvUM2H, addressY3wMBHy, uintkQ9MaE, uintQZEp18C, addressKCPXFR6, addressFkY7MEN, byteDqjkNWQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYNKfUPB = BigInt("271")
		const BancorV2_ZapIn_General_V1_1B6SVzon = await BancorV2_ZapIn_General_V1_1.new(uintYNKfUPB, {from: accounts[4]});
		const addressEJxKAi = accounts[2]
		const addressAVWX5gK = accounts[0]
		const uintqOKwxCi = BigInt("592")
//		const addressAi6s7K4 = await BancorV2_ZapIn_General_V1_1B6SVzon.inCaseTokengetsStuck.call(addressEJxKAi, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1B6SVzon.stopInEmergency.call({from: accounts[0]});
//		const addressegqFcbZ = await BancorV2_ZapIn_General_V1_1B6SVzon.inCaseTokengetsStuck.call(addressAVWX5gK, {from: accounts[4]});
//		const uint16ckitIqD = await BancorV2_ZapIn_General_V1_1B6SVzon.set_new_goodwill.call(uintqOKwxCi, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1B6SVzon.inCaseTokengetsStuck.call(addressEJxKAi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintqglJ7t = BigInt("1616")
		const BancorV2_ZapIn_General_V1_1XzpbsO8 = await BancorV2_ZapIn_General_V1_1.new(uintqglJ7t, {from: accounts[2]});
		const addressPrysHBW = await BancorV2_ZapIn_General_V1_1XzpbsO8.owner.call({from: accounts[4]});
		const addressML5HaHu = await BancorV2_ZapIn_General_V1_1XzpbsO8.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1XzpbsO8.renounceOwnership.call({from: accounts[1]});

		assert.equal(addressML5HaHu, 0x876026139400618c01092276FbcBc57ce8369805)
		assert.equal(addressPrysHBW, 0x876026139400618c01092276FbcBc57ce8369805)
		await expect(BancorV2_ZapIn_General_V1_1XzpbsO8.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintjdu5Xdf = BigInt("1616")
		const BancorV2_ZapIn_General_V1_1XzpbsO8 = await BancorV2_ZapIn_General_V1_1.new(uintjdu5Xdf, {from: accounts[2]});
		const addresstVnNlq = accounts[1]
		const bytebzFibwu = "0x19030f1a1c120a0809"
		const addressPCzsvZq = accounts[1]
		const addressbnoFmt = accounts[4]
		const uintIYZKt46 = BigInt("1251")
		const uintCFT1pg5 = BigInt("390")
		const addressdY86cDS = "0x0000000000000000000000000000000000000001"
		const addressBH8zuT3 = accounts[4]
		const addresswxucitp = accounts[3]
		const addressuUom61R = await BancorV2_ZapIn_General_V1_1XzpbsO8.transferOwnership.call(addresstVnNlq, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1XzpbsO8.stopInEmergency.call({from: accounts[3]});
//		const uint256yDE87Mg = await BancorV2_ZapIn_General_V1_1XzpbsO8.ZapInSingleSided.call(addresswxucitp, addressBH8zuT3, addressdY86cDS, uintCFT1pg5, uintIYZKt46, addressbnoFmt, addressPCzsvZq, bytebzFibwu, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1XzpbsO8.stopInEmergency.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkOpG2k5 = BigInt("1616")
		const BancorV2_ZapIn_General_V1_1XzpbsO8 = await BancorV2_ZapIn_General_V1_1.new(uintkOpG2k5, {from: accounts[2]});
		const byteA7pIg2f = "0x19030f1a1c120a0809"
		const addressZ59Ffc = accounts[1]
		const addressjtdRzP8 = accounts[4]
		const uintIRnTuDa = BigInt("1249")
		const uintnk8GL80 = BigInt("390")
		const addressBt4E9J = "0x0000000000000000000000000000000000000001"
		const addressO2mE9W = accounts[0]
		const addressArUX2hC = accounts[3]
//		await BancorV2_ZapIn_General_V1_1XzpbsO8.withdraw.call({from: accounts[2]});
//		const uint256yDE87Mg = await BancorV2_ZapIn_General_V1_1XzpbsO8.ZapInSingleSided.call(addressArUX2hC, addressO2mE9W, addressBt4E9J, uintnk8GL80, uintIRnTuDa, addressjtdRzP8, addressZ59Ffc, byteA7pIg2f, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1XzpbsO8.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintBswscIu = BigInt("447")
		const BancorV2_ZapIn_General_V1_1c8cbAp = await BancorV2_ZapIn_General_V1_1.new(uintBswscIu, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1c8cbAp.toggleContractActive.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1c8cbAp.renounceOwnership.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1c8cbAp.withdraw.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1c8cbAp.toggleContractActive.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintg8G2Uao = BigInt("57")
		const BancorV2_ZapIn_General_V1_1UUL84IR = await BancorV2_ZapIn_General_V1_1.new(uintg8G2Uao, {from: accounts[0]});
		const addressRokyYgo = accounts[2]
//		await BancorV2_ZapIn_General_V1_1UUL84IR.renounceOwnership.call({from: accounts[0]});
//		const addresstwqJw0A = await BancorV2_ZapIn_General_V1_1UUL84IR.toPayable.call(addressRokyYgo, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1UUL84IR.stopInEmergency.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1UUL84IR.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})