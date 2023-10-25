const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAbHTKt = BigInt("1181")
		const BancorV2_ZapIn_General_V1_1cZslwuL = await BancorV2_ZapIn_General_V1_1.new(uintAbHTKt, {from: accounts[0]});
		const uintq6QJwFk = BigInt("763")
		await BancorV2_ZapIn_General_V1_1cZslwuL.withdraw.call({from: accounts[4]});
		const uint16dXFwSn4 = await BancorV2_ZapIn_General_V1_1cZslwuL.set_new_goodwill.call(uintq6QJwFk, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1cZslwuL.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintckuk3t = BigInt("1407")
		const BancorV2_ZapIn_General_V1_1NjyZrBn = await BancorV2_ZapIn_General_V1_1.new(uintckuk3t, {from: accounts[3]});
		const addresslPrgdoK = accounts[3]
		const addressGEsy3c1 = accounts[4]
		const uintw7iYCEu = BigInt("1361")
		await BancorV2_ZapIn_General_V1_1NjyZrBn.toggleContractActive.call({from: accounts[3]});
		const addressEax3ZnR = await BancorV2_ZapIn_General_V1_1NjyZrBn.transferOwnership.call(addresslPrgdoK, {from: accounts[3]});
		const addressVvXsC53 = await BancorV2_ZapIn_General_V1_1NjyZrBn.transferOwnership.call(addressGEsy3c1, {from: accounts[1]});
		const uint16C4AEM1M = await BancorV2_ZapIn_General_V1_1NjyZrBn.set_new_goodwill.call(uintw7iYCEu, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1NjyZrBn.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintVUrBtt6 = BigInt("346")
		const BancorV2_ZapIn_General_V1_1mCEiOqE = await BancorV2_ZapIn_General_V1_1.new(uintVUrBtt6, {from: accounts[1]});
		const byterER9H2m = "0x1e090307001f121f05111a0a20030e"
		const addressXHMZ5m4 = "0x0000000000000000000000000000000000000001"
		const addressIZyQY9z = "0x0000000000000000000000000000000000000001"
		const uintWRW6PV = BigInt("437")
		const uintrYgV4VD = BigInt("977")
		const addressPiKwLJ2 = accounts[3]
		const addressARrI2y7 = accounts[4]
		const addressInMVHbY = accounts[3]
		await BancorV2_ZapIn_General_V1_1mCEiOqE.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1mCEiOqE.stopInEmergency.call({from: accounts[2]});
		const uint256TpeU4H = await BancorV2_ZapIn_General_V1_1mCEiOqE.ZapInSingleSided.call(addressInMVHbY, addressARrI2y7, addressPiKwLJ2, uintrYgV4VD, uintWRW6PV, addressIZyQY9z, addressXHMZ5m4, byterER9H2m, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1mCEiOqE.stopInEmergency.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1mCEiOqE.toggleContractActive.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1mCEiOqE.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintEQbRql0 = BigInt("1779")
		const BancorV2_ZapIn_General_V1_1iSLArnU = await BancorV2_ZapIn_General_V1_1.new(uintEQbRql0, {from: accounts[2]});
		const addressqcrfCR = await BancorV2_ZapIn_General_V1_1iSLArnU.owner.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1iSLArnU.onlyOwner.call({from: accounts[4]});
		const addressu0hoPs1 = await BancorV2_ZapIn_General_V1_1iSLArnU.owner.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1iSLArnU.stopInEmergency.call({from: accounts[2]});

		assert.equal(addressqcrfCR, 0x1D659969C98d6bA6D9D3036fE21253a32Ac059CB)
		await expect(BancorV2_ZapIn_General_V1_1iSLArnU.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintvcBTPJf = BigInt("1181")
		const BancorV2_ZapIn_General_V1_1cZslwuL = await BancorV2_ZapIn_General_V1_1.new(uintvcBTPJf, {from: accounts[0]});
		const bytedTIppXS = "0x0217061d1619040e0b1a1a12"
		const addressB2nqccB = accounts[4]
		const addressJHBgg2r = accounts[1]
		const uintqLAKX8h = BigInt("1328")
		const uintF87IRKg = BigInt("1676")
		const addresslY1cnhW = accounts[5]
		const addressN6mASN = accounts[1]
		const addressWkwZrn = accounts[4]
		const uintsqSiHtM = BigInt("794")
		const uint256KaCX65 = await BancorV2_ZapIn_General_V1_1cZslwuL.ZapInSingleSided.call(addressWkwZrn, addressN6mASN, addresslY1cnhW, uintF87IRKg, uintqLAKX8h, addressJHBgg2r, addressB2nqccB, bytedTIppXS, {from: accounts[4]});
		const uint16dXFwSn4 = await BancorV2_ZapIn_General_V1_1cZslwuL.set_new_goodwill.call(uintsqSiHtM, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1cZslwuL.withdraw.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1cZslwuL.ZapInSingleSided.call(addressWkwZrn, addressN6mASN, addresslY1cnhW, uintF87IRKg, uintqLAKX8h, addressJHBgg2r, addressB2nqccB, bytedTIppXS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintE03uija = BigInt("1112")
		const BancorV2_ZapIn_General_V1_1eeQ5LE1 = await BancorV2_ZapIn_General_V1_1.new(uintE03uija, {from: accounts[4]});
		const addressGWi0dHE = accounts[3]
		const addressB4gpKvU = await BancorV2_ZapIn_General_V1_1eeQ5LE1.inCaseTokengetsStuck.call(addressGWi0dHE, {from: accounts[4]});
		const addressdrIvCS9 = await BancorV2_ZapIn_General_V1_1eeQ5LE1.owner.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1eeQ5LE1.stopInEmergency.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1eeQ5LE1.toggleContractActive.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1eeQ5LE1.nonReentrant.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1eeQ5LE1.inCaseTokengetsStuck.call(addressGWi0dHE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintVxrUqmg = BigInt("2011")
		const BancorV2_ZapIn_General_V1_1GYvPHq0 = await BancorV2_ZapIn_General_V1_1.new(uintVxrUqmg, {from: accounts[1]});
		const uintSOv7MVN = BigInt("1287")
		const byteS53WciD = "0x051e1218061c161e0b03141e1b14101617060b"
		const addressoRtDph1 = accounts[2]
		const addressULxI8Pu = accounts[1]
		const uintTbwNRMs = BigInt("477")
		const uintCkKUPPP = BigInt("90")
		const addresssgZoEM5 = accounts[3]
		const addressmsJOVXC = accounts[4]
		const addressOXDjQ5S = accounts[1]
		const uint16ACD6Xaa = await BancorV2_ZapIn_General_V1_1GYvPHq0.set_new_goodwill.call(uintSOv7MVN, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1GYvPHq0.onlyOwner.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1GYvPHq0.nonReentrant.call({from: accounts[0]});
		const boolI6u6Sg6 = await BancorV2_ZapIn_General_V1_1GYvPHq0.isOwner.call({from: accounts[3]});
		const uint256LbJHBkB = await BancorV2_ZapIn_General_V1_1GYvPHq0.ZapInSingleSided.call(addressOXDjQ5S, addressmsJOVXC, addresssgZoEM5, uintCkKUPPP, uintTbwNRMs, addressULxI8Pu, addressoRtDph1, byteS53WciD, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1GYvPHq0.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintLJZj9g3 = BigInt("1181")
		const BancorV2_ZapIn_General_V1_1cZslwuL = await BancorV2_ZapIn_General_V1_1.new(uintLJZj9g3, {from: accounts[0]});
		const uint7WNj28 = BigInt("461")
		await BancorV2_ZapIn_General_V1_1cZslwuL.withdraw.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1cZslwuL.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});
		const uint16dXFwSn4 = await BancorV2_ZapIn_General_V1_1cZslwuL.set_new_goodwill.call(uint7WNj28, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1cZslwuL.withdraw.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintDN4TOz = BigInt("1701")
		const BancorV2_ZapIn_General_V1_1E3LUsX8 = await BancorV2_ZapIn_General_V1_1.new(uintDN4TOz, {from: "0x0000000000000000000000000000000000000001"});
		const uintTwGhaS = BigInt("1994")
		const addressZumKG7p = accounts[1]
		const addressT2NyOA0 = accounts[3]
		const uint16DQHWubY = await BancorV2_ZapIn_General_V1_1E3LUsX8.set_new_goodwill.call(uintTwGhaS, {from: accounts[5]});
		const addressIdkrBdR = await BancorV2_ZapIn_General_V1_1E3LUsX8.toPayable.call(addressZumKG7p, {from: accounts[2]});
		const addressGYPyHMw = await BancorV2_ZapIn_General_V1_1E3LUsX8.transferOwnership.call(addressT2NyOA0, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1E3LUsX8.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1E3LUsX8.nonReentrant.call({from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinthzZAYq = BigInt("1181")
		const BancorV2_ZapIn_General_V1_1cZslwuL = await BancorV2_ZapIn_General_V1_1.new(uinthzZAYq, {from: accounts[0]});
		const byteIOKijNR = "0x0217061d1619040e0b1a1a12"
		const addressOCsbACf = accounts[4]
		const addressePVuy3j = accounts[1]
		const uintqyyMIR = BigInt("1328")
		const uintsrxGNqe = BigInt("1676")
		const addressVyiux7s = accounts[5]
		const addressj5qn30o = accounts[1]
		const addressg5IhkMf = accounts[4]
		await BancorV2_ZapIn_General_V1_1cZslwuL.withdraw.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1cZslwuL.renounceOwnership.call({from: accounts[0]});
		const uint256KaCX65 = await BancorV2_ZapIn_General_V1_1cZslwuL.ZapInSingleSided.call(addressg5IhkMf, addressj5qn30o, addressVyiux7s, uintsrxGNqe, uintqyyMIR, addressePVuy3j, addressOCsbACf, byteIOKijNR, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1cZslwuL.withdraw.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})