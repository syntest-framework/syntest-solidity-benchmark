const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Tc0ULXL = await YieldFarmLP2.new({from: accounts[2]});
		const uinty0Km4V2 = BigInt("16")
		const uinteld4Ho3 = await YieldFarmLP2Tc0ULXL.harvest.call(uinty0Km4V2, {from: accounts[1]});
		const uintNNP4We = await YieldFarmLP2Tc0ULXL.massHarvest.call({from: accounts[2]});

		await expect(YieldFarmLP2Tc0ULXL.harvest.call(uinty0Km4V2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP29aXMX5 = await YieldFarmLP2.new({from: accounts[5]});
		const uintS58uApD = BigInt("1093")
		const addressiWHnla6 = accounts[4]
		const uintFOx2gLH = await YieldFarmLP29aXMX5.getPoolSize.call(uintS58uApD, {from: accounts[0]});
		const uintTpTZOCU = await YieldFarmLP29aXMX5.claimable.call(addressiWHnla6, {from: accounts[2]});

		await expect(YieldFarmLP29aXMX5.getPoolSize.call(uintS58uApD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2BAqhLP = await YieldFarmLP2.new({from: accounts[1]});
		const address5lgDgB = accounts[2]
		const uintrFHmmj = BigInt("1721")
		const addressvBqhjS7 = accounts[2]
		const addressjBq4zL5 = accounts[2]
		const addressOY8JYRk = accounts[5]
		const addressb4FtrAa = accounts[5]
		const uintVnCWHYG = await YieldFarmLP2BAqhLP.massHarvest.call({from: accounts[0]});
		const uintNDeJ4ss = await YieldFarmLP2BAqhLP.claimable.call(address5lgDgB, {from: accounts[4]});
		const uintWlKGdzJ = await YieldFarmLP2BAqhLP.harvest.call(uintrFHmmj, {from: accounts[2]});
		const addresszrGbOW4 = await YieldFarmLP2BAqhLP.initialize.call(addressb4FtrAa, addressOY8JYRk, addressjBq4zL5, addressvBqhjS7, {from: accounts[1]});

		await expect(YieldFarmLP2BAqhLP.massHarvest.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ebJIb6 = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUMpaJa8 = BigInt("639")
		const uintVjUEoAY = BigInt("1722")
		const uintgNQbbQ5 = BigInt("1077")
		const addressrYfDRfA = accounts[3]
		const uintNw7zlSj = await YieldFarmLP2ebJIb6.getPoolSize.call(uintUMpaJa8, {from: accounts[3]});
		const uinthRNW4q3 = await YieldFarmLP2ebJIb6.getPoolSize.call(uintVjUEoAY, {from: accounts[0]});
		const uintCQ0Libz = await YieldFarmLP2ebJIb6.getEpochStake.call(addressrYfDRfA, uintgNQbbQ5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2KMMO0w = await YieldFarmLP2.new({from: accounts[5]});
		const addressAS0wG2K = accounts[2]
		const addressRJS6v7a = accounts[1]
		const uintN62uDZj = BigInt("1229")
		const addressaj4AatQ = accounts[2]
		const addressVQTt0Ok = accounts[3]
		const uintVU1Nl0h = await YieldFarmLP2KMMO0w.claimable.call(addressAS0wG2K, {from: accounts[4]});
		const uintp9NDLrb = await YieldFarmLP2KMMO0w.claimable.call(addressRJS6v7a, {from: "0x0000000000000000000000000000000000000001"});
		const uintD5VTTB8 = await YieldFarmLP2KMMO0w.harvest.call(uintN62uDZj, {from: accounts[1]});
		const uintiLrz04n = await YieldFarmLP2KMMO0w.claimable.call(addressaj4AatQ, {from: accounts[0]});
		const uinttxMsjJq = await YieldFarmLP2KMMO0w.claimable.call(addressVQTt0Ok, {from: accounts[4]});

		await expect(YieldFarmLP2KMMO0w.claimable.call(addressAS0wG2K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP29aXMX5 = await YieldFarmLP2.new({from: accounts[5]});
		const address65aTad = accounts[4]
		const uintZuhUn8G = BigInt("1093")
		const addressdpMHBsK = accounts[4]
		const uintyzofN7E = await YieldFarmLP29aXMX5.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintUVcYRd3 = await YieldFarmLP29aXMX5.claimable.call(address65aTad, {from: accounts[2]});
		const uintFOx2gLH = await YieldFarmLP29aXMX5.getPoolSize.call(uintZuhUn8G, {from: accounts[0]});
		const uintTpTZOCU = await YieldFarmLP29aXMX5.claimable.call(addressdpMHBsK, {from: accounts[2]});

		assert.equal(uintyzofN7E, BigInt("0"))
		await expect(YieldFarmLP29aXMX5.claimable.call(address65aTad, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2BAqhLP = await YieldFarmLP2.new({from: accounts[1]});
		const addressQSvlfbL = "0x0000000000000000000000000000000000000001"
		const addressR2OqlN0 = accounts[1]
		const addressu76bbP = accounts[2]
		const addressM6yKjbc = accounts[3]
		const addressB0QVH97 = accounts[2]
		const addressGDOYNue = accounts[2]
		const addressFmwES0M = accounts[2]
		const addressjS2NS3T = accounts[5]
		const addressJxgDTwf = accounts[5]
		const uintMbmVjxE = await YieldFarmLP2BAqhLP.userLastEpochIdHarvested.call({from: accounts[2]});
		const addressdYdBE38 = await YieldFarmLP2BAqhLP.initialize.call(addressM6yKjbc, addressu76bbP, addressR2OqlN0, addressQSvlfbL, {from: accounts[3]});
		const uintVnCWHYG = await YieldFarmLP2BAqhLP.massHarvest.call({from: accounts[0]});
		const uintNDeJ4ss = await YieldFarmLP2BAqhLP.claimable.call(addressB0QVH97, {from: accounts[4]});
		const addresszrGbOW4 = await YieldFarmLP2BAqhLP.initialize.call(addressJxgDTwf, addressjS2NS3T, addressFmwES0M, addressGDOYNue, {from: accounts[1]});

		assert.equal(uintMbmVjxE, BigInt("0"))
		await expect(YieldFarmLP2BAqhLP.initialize.call(addressM6yKjbc, addressu76bbP, addressR2OqlN0, addressQSvlfbL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2km0Lnwy = await YieldFarmLP2.new({from: accounts[4]});
		const uintredhcV6 = BigInt("1731")
		const addressmi8yl7Q = accounts[1]
		const addressvrvRsMn = accounts[1]
		const addressEpbBzpr = accounts[4]
		const address4QGlu8 = accounts[0]
		const addressK1gD55W = accounts[0]
		const addressVacHUkj = accounts[3]
		const uintoEKs9NJ = await YieldFarmLP2km0Lnwy.getEpochStake.call(addressmi8yl7Q, uintredhcV6, {from: accounts[0]});
		const addressaZ3UC4H = await YieldFarmLP2km0Lnwy.initialize.call(addressK1gD55W, address4QGlu8, addressEpbBzpr, addressvrvRsMn, {from: accounts[3]});
		const uintbRILdNS = await YieldFarmLP2km0Lnwy.claimable.call(addressVacHUkj, {from: accounts[1]});

		await expect(YieldFarmLP2km0Lnwy.getEpochStake.call(addressmi8yl7Q, uintredhcV6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Tc0ULXL = await YieldFarmLP2.new({from: accounts[2]});
		const uintwzHbQZb = BigInt("783")
		const addressgn094AM = accounts[3]
		const uintZ1t878 = await YieldFarmLP2Tc0ULXL.getCurrentEpoch.call({from: accounts[1]});
		const uintNNP4We = await YieldFarmLP2Tc0ULXL.massHarvest.call({from: accounts[2]});
		const uintjo2TcQt = await YieldFarmLP2Tc0ULXL.getEpochStake.call(addressgn094AM, uintwzHbQZb, {from: accounts[0]});

		await expect(YieldFarmLP2Tc0ULXL.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})