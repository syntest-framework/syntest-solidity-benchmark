const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintV6JE4QH = BigInt("148")
		const BancorV2_ZapIn_General_V1_1gOIxQ4n = await BancorV2_ZapIn_General_V1_1.new(uintV6JE4QH, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1gOIxQ4n.withdraw.call({from: accounts[4]});
//		const booljsNFaIu = await BancorV2_ZapIn_General_V1_1gOIxQ4n.isOwner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1gOIxQ4n.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintFhhm70k = BigInt("1959")
		const BancorV2_ZapIn_General_V1_1q6V5NzX = await BancorV2_ZapIn_General_V1_1.new(uintFhhm70k, {from: accounts[4]});
		const addressIjoQ9hY = accounts[5]
//		await BancorV2_ZapIn_General_V1_1q6V5NzX.onlyOwner.call({from: accounts[3]});
//		const address06WQeJ = await BancorV2_ZapIn_General_V1_1q6V5NzX.inCaseTokengetsStuck.call(addressIjoQ9hY, {from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1q6V5NzX.toggleContractActive.call({from: accounts[2]});
//		const addressHokSMR1 = await BancorV2_ZapIn_General_V1_1q6V5NzX.owner.call({from: accounts[4]});
//		const addressefK9r73 = await BancorV2_ZapIn_General_V1_1q6V5NzX.owner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1q6V5NzX.nonReentrant.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1q6V5NzX.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintXLvv2QW = BigInt("224")
		const BancorV2_ZapIn_General_V1_1TLu0hdB = await BancorV2_ZapIn_General_V1_1.new(uintXLvv2QW, {from: accounts[4]});
		const bytedtzvn0X = "0x1e0d051b19010f18"
		const addresspYyFYbD = accounts[1]
		const addressFMPcVcM = accounts[1]
		const uintrC3uXw9 = BigInt("89")
		const uintPBxPDgI = BigInt("1058")
		const addressBJBp5v1 = accounts[3]
		const addressme2WN2 = accounts[1]
		const addressER5QyiK = accounts[2]
		const addressOYTubm4 = accounts[2]
//		const uint256ycicbFc = await BancorV2_ZapIn_General_V1_1TLu0hdB.ZapInSingleSided.call(addressER5QyiK, addressme2WN2, addressBJBp5v1, uintPBxPDgI, uintrC3uXw9, addressFMPcVcM, addresspYyFYbD, bytedtzvn0X, {from: accounts[0]});
//		const addresstvoHEeM = await BancorV2_ZapIn_General_V1_1TLu0hdB.transferOwnership.call(addressOYTubm4, {from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1TLu0hdB.nonReentrant.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1TLu0hdB.ZapInSingleSided.call(addressER5QyiK, addressme2WN2, addressBJBp5v1, uintPBxPDgI, uintrC3uXw9, addressFMPcVcM, addresspYyFYbD, bytedtzvn0X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintWEuqsDV = BigInt("1747")
		const BancorV2_ZapIn_General_V1_1tyX4NgI = await BancorV2_ZapIn_General_V1_1.new(uintWEuqsDV, {from: accounts[4]});
		const address0J887g = accounts[4]
		const addressNCFDc6J = await BancorV2_ZapIn_General_V1_1tyX4NgI.owner.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1tyX4NgI.stopInEmergency.call({from: accounts[2]});
//		const addresshBro6ic = await BancorV2_ZapIn_General_V1_1tyX4NgI.owner.call({from: accounts[2]});
//		const addressEEJoti4 = await BancorV2_ZapIn_General_V1_1tyX4NgI.transferOwnership.call(address0J887g, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1tyX4NgI.stopInEmergency.call({from: accounts[3]});
//		const addresscwnCSOx = await BancorV2_ZapIn_General_V1_1tyX4NgI.owner.call({from: accounts[3]});

		assert.equal(addressNCFDc6J, 0x0873d9c7a9a78FCBf9c804aaf86c4068e19c65b0)
		await expect(BancorV2_ZapIn_General_V1_1tyX4NgI.stopInEmergency.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUS7ISF0 = BigInt("403")
		const BancorV2_ZapIn_General_V1_1MLKLMsR = await BancorV2_ZapIn_General_V1_1.new(uintUS7ISF0, {from: accounts[1]});
		const byteA2gV71B = "0x090f18190b1f15200601131b06081e0112060f17"
		const addressGepKEdu = accounts[4]
		const addressHVSjvK = accounts[4]
		const uintFgB7hkZ = BigInt("1144")
		const uintktdCgDS = BigInt("222")
		const addressCOH2It2 = accounts[2]
		const addressWoutJm = accounts[1]
		const addressP4PXVId = accounts[5]
//		await BancorV2_ZapIn_General_V1_1MLKLMsR.toggleContractActive.call({from: accounts[1]});
//		const uint256WdWvcai = await BancorV2_ZapIn_General_V1_1MLKLMsR.ZapInSingleSided.call(addressP4PXVId, addressWoutJm, addressCOH2It2, uintktdCgDS, uintFgB7hkZ, addressHVSjvK, addressGepKEdu, byteA2gV71B, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1MLKLMsR.withdraw.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1MLKLMsR.toggleContractActive.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintSXEWYSn = BigInt("1144")
		const BancorV2_ZapIn_General_V1_1YqW599Y = await BancorV2_ZapIn_General_V1_1.new(uintSXEWYSn, {from: accounts[1]});
		const addressNIxHCvr = accounts[3]
		const addressAUsJKOv = accounts[2]
//		const addressj6aBjKN = await BancorV2_ZapIn_General_V1_1YqW599Y.inCaseTokengetsStuck.call(addressNIxHCvr, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1YqW599Y.renounceOwnership.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1YqW599Y.onlyOwner.call({from: accounts[0]});
//		const addressLEQ6uuX = await BancorV2_ZapIn_General_V1_1YqW599Y.inCaseTokengetsStuck.call(addressAUsJKOv, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1YqW599Y.inCaseTokengetsStuck.call(addressNIxHCvr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdLcjNgw = BigInt("148")
		const BancorV2_ZapIn_General_V1_1gOIxQ4n = await BancorV2_ZapIn_General_V1_1.new(uintdLcjNgw, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1gOIxQ4n.renounceOwnership.call({from: accounts[1]});
//		const booljsNFaIu = await BancorV2_ZapIn_General_V1_1gOIxQ4n.isOwner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1gOIxQ4n.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinttKino2m = BigInt("148")
		const BancorV2_ZapIn_General_V1_1gOIxQ4n = await BancorV2_ZapIn_General_V1_1.new(uinttKino2m, {from: accounts[1]});
		const uintkopfUJv = BigInt("1478")
		const uint16P0czia = await BancorV2_ZapIn_General_V1_1gOIxQ4n.set_new_goodwill.call(uintkopfUJv, {from: accounts[1]});
		const booljsNFaIu = await BancorV2_ZapIn_General_V1_1gOIxQ4n.isOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1gOIxQ4n.toggleContractActive.call({from: accounts[2]});

		assert.equal(booljsNFaIu, false)
		await expect(BancorV2_ZapIn_General_V1_1gOIxQ4n.toggleContractActive.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintHnUcByx = BigInt("148")
		const BancorV2_ZapIn_General_V1_1gOIxQ4n = await BancorV2_ZapIn_General_V1_1.new(uintHnUcByx, {from: accounts[1]});
		const booljsNFaIu = await BancorV2_ZapIn_General_V1_1gOIxQ4n.isOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1gOIxQ4n.withdraw.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1gOIxQ4n.stopInEmergency.call({from: accounts[4]});

		assert.equal(booljsNFaIu, false)
		await expect(BancorV2_ZapIn_General_V1_1gOIxQ4n.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintVfslIvL = BigInt("148")
		const BancorV2_ZapIn_General_V1_1gOIxQ4n = await BancorV2_ZapIn_General_V1_1.new(uintVfslIvL, {from: accounts[1]});
		const addressNc4fjqL = accounts[1]
		const addressJk2M1V2 = await BancorV2_ZapIn_General_V1_1gOIxQ4n.transferOwnership.call(addressNc4fjqL, {from: accounts[1]});
		const booljsNFaIu = await BancorV2_ZapIn_General_V1_1gOIxQ4n.isOwner.call({from: accounts[3]});

		assert.equal(booljsNFaIu, false)
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintum7Kelm = BigInt("789")
		const BancorV2_ZapIn_General_V1_1me87e0r = await BancorV2_ZapIn_General_V1_1.new(uintum7Kelm, {from: "0x0000000000000000000000000000000000000001"});
		const uintoOdzIl = BigInt("1923")
		await BancorV2_ZapIn_General_V1_1me87e0r.onlyOwner.call({from: accounts[1]});
		const uint16xU8prf = await BancorV2_ZapIn_General_V1_1me87e0r.set_new_goodwill.call(uintoOdzIl, {from: accounts[1]});
		const addressLEtsPD8 = await BancorV2_ZapIn_General_V1_1me87e0r.owner.call({from: accounts[1]});
	});
})