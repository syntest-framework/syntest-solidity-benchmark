const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolXN9W8dr = await ETFXPool.new({from: accounts[5]});
		const addressIChtWvr = accounts[2]
		const uintkIdbe3J = BigInt("407")
		const addressP9U87nq = accounts[2]
		await ETFXPoolXN9W8dr.onlyOwner.call({from: accounts[3]});
		const uint256whW1PTp = await ETFXPoolXN9W8dr.balanceOf.call(addressIChtWvr, {from: accounts[3]});
		const boolX5BRfcA = await ETFXPoolXN9W8dr.transfer.call(addressP9U87nq, uintkIdbe3J, {from: accounts[3]});
		const addressMWji4PP = await ETFXPoolXN9W8dr.owner.call({from: accounts[1]});
		await ETFXPoolXN9W8dr.exit.call({from: accounts[1]});
		const stringbcfVuVI = await ETFXPoolXN9W8dr.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolXN9W8dr.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIIyCGy = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintc5BjxU8 = BigInt("186")
		const addressm6OwjNR = accounts[5]
		const uintdbP8usB = BigInt("1046")
		const addressU1meuVU = accounts[3]
		const addressVFy0bRR = accounts[2]
		const uintI8U8mZ = BigInt("891")
		const addressYgNw9uy = accounts[1]
		const uintPK4q4Zj = BigInt("26")
		const addressc3ylqIu = accounts[2]
		const addressFKcIK6h = accounts[0]
		const boolctIkp1z = await ETFXPoolIIyCGy.increaseAllowance.call(addressm6OwjNR, uintc5BjxU8, {from: accounts[2]});
		const addressqzePC7 = await ETFXPoolIIyCGy.owner.call({from: accounts[3]});
		const uint256e4GWqbI = await ETFXPoolIIyCGy.rewardPerToken.call({from: accounts[0]});
		const booljNRquO1 = await ETFXPoolIIyCGy.transferFrom.call(addressVFy0bRR, addressU1meuVU, uintdbP8usB, {from: "0x0000000000000000000000000000000000000001"});
		const boolDTcT3c8 = await ETFXPoolIIyCGy.transfer.call(addressYgNw9uy, uintI8U8mZ, {from: accounts[4]});
		const booli99p37d = await ETFXPoolIIyCGy.transferFrom.call(addressFKcIK6h, addressc3ylqIu, uintPK4q4Zj, {from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolb6JwIom = await ETFXPool.new({from: accounts[0]});
		const addressRy82H1L = accounts[2]
		await ETFXPoolb6JwIom.getReward.call({from: accounts[2]});
		const stringdnmwTW = await ETFXPoolb6JwIom.symbol.call({from: accounts[2]});
		await ETFXPoolb6JwIom.getReward.call({from: accounts[3]});
		await ETFXPoolb6JwIom.onlyOwner.call({from: accounts[1]});
		const uint256KiQbWw = await ETFXPoolb6JwIom.earned.call(addressRy82H1L, {from: accounts[5]});

		await expect(ETFXPoolb6JwIom.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringafB1dy = "8S51sUBx2HDSHKvoEoReEgABLY2CFPLO7LDEneffmH6YrbnzROMqnEISFB7DHUw7vPX9GYel08jsMywNYkm38HMzo1GkQjmCT5"
		const stringX3ksutQ = "BSmmN8GrSFRHRFYguMAg9K588yriWISBffNOaWLforhbpaiSEErlARBJGrCytALHYwWG"
		const uintQXQKtkc = BigInt("189")
		const ETFXPoolBSbPKsk = await ETFXPool.new(stringafB1dy, stringX3ksutQ, uintQXQKtkc, {from: accounts[4]});
		const uinttSjJvZq = BigInt("3")
		const addressCnJFfE9 = accounts[3]
		const uintHUXBTID = BigInt("686")
		const addresspZhOVt2 = accounts[0]
		const addressSxMImPN = accounts[5]
		const addressn77gVl = await ETFXPoolBSbPKsk.owner.call({from: accounts[3]});
		const boolqeoK3A = await ETFXPoolBSbPKsk.transfer.call(addressCnJFfE9, uinttSjJvZq, {from: accounts[1]});
		const boollZZvUam = await ETFXPoolBSbPKsk.transferFrom.call(addressSxMImPN, addresspZhOVt2, uintHUXBTID, {from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPool4wyPMM = await ETFXPool.new({from: accounts[2]});
		const uintH86MbXe = BigInt("1384")
		const addressvBxiYg2 = accounts[1]
		await ETFXPool4wyPMM.renounceOwnership.call({from: accounts[1]});
		const boolWU1D54d = await ETFXPool4wyPMM.decreaseAllowance.call(addressvBxiYg2, uintH86MbXe, {from: accounts[0]});
		const uint256S2FWawW = await ETFXPool4wyPMM.rewardPerToken.call({from: accounts[3]});
		const uint8vmq3cEE = await ETFXPool4wyPMM.decimals.call({from: accounts[3]});

		await expect(ETFXPool4wyPMM.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleURDJTS = await ETFXPool.new({from: accounts[4]});
		const uintISAvTrl = BigInt("407")
		const addressJf1SHLO = "0x0000000000000000000000000000000000000001"
		const uinte0jaM5G = BigInt("1696")
		const addressO4FL9RI = accounts[1]
		const addressduUqYaJ = accounts[2]
		const uintcctSFSr = BigInt("1840")
		const addressnmSVzuV = accounts[1]
		const boolftlaeM = await ETFXPooleURDJTS.transfer.call(addressJf1SHLO, uintISAvTrl, {from: accounts[4]});
		await ETFXPooleURDJTS.onlyOwner.call({from: accounts[2]});
		const boolRGgD6e9 = await ETFXPooleURDJTS.transferFrom.call(addressduUqYaJ, addressO4FL9RI, uinte0jaM5G, {from: accounts[0]});
		const boolLAyfvQ = await ETFXPooleURDJTS.approve.call(addressnmSVzuV, uintcctSFSr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPooleURDJTS.transfer.call(addressJf1SHLO, uintISAvTrl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const addressMKSaFlj = accounts[3]
		const uintsUzEsl7 = BigInt("711")
		const uintkgJj419 = BigInt("510")
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const uint256rDyAetY = await ETFXPoolJdcHQqc.earned.call(addressMKSaFlj, {from: accounts[2]});
		const uint256cK65wBC = await ETFXPoolJdcHQqc.stake.call(uintsUzEsl7, {from: accounts[3]});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uintkgJj419, {from: accounts[2]});

		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.earned.call(addressMKSaFlj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const addressRpGMn7I = accounts[2]
		const addressckJOHSO = accounts[4]
		const addressyUy8bnl = accounts[3]
		const uintmrlkrxV = BigInt("711")
		const uintH4IESh6 = BigInt("1808")
		const addressZNWIzhM = accounts[5]
		const uintV6ry76o = BigInt("510")
		const uint256NERmqoC = await ETFXPoolJdcHQqc.allowance.call(addressckJOHSO, addressRpGMn7I, {from: accounts[2]});
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const uint256rDyAetY = await ETFXPoolJdcHQqc.earned.call(addressyUy8bnl, {from: accounts[2]});
		const uint256cK65wBC = await ETFXPoolJdcHQqc.stake.call(uintmrlkrxV, {from: accounts[3]});
		const boolMIAeOLV = await ETFXPoolJdcHQqc.decreaseAllowance.call(addressZNWIzhM, uintH4IESh6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uintV6ry76o, {from: accounts[2]});

		assert.equal(uint256NERmqoC, BigInt("0"))
		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.earned.call(addressyUy8bnl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintXycEohV = BigInt("1304")
		const address4gbf5A = accounts[3]
		const uintjqd28Tb = BigInt("720")
		const uinttT05DJh = BigInt("510")
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const uint256Ou1iUeK = await ETFXPoolJdcHQqc.stake.call(uintXycEohV, {from: accounts[3]});
		const uint256rDyAetY = await ETFXPoolJdcHQqc.earned.call(address4gbf5A, {from: accounts[2]});
		const uint256cK65wBC = await ETFXPoolJdcHQqc.stake.call(uintjqd28Tb, {from: accounts[3]});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uinttT05DJh, {from: accounts[2]});

		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.stake.call(uintXycEohV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintAOJUwVn = BigInt("305")
		const addressAt5op3f = accounts[1]
		const addressNa2558k = accounts[4]
		const addressMS9IJOg = accounts[2]
		const uintNzH9g8n = BigInt("616")
		const addressHBwF4g8 = accounts[3]
		const uintSrDH4nJ = BigInt("711")
		const uintxf20ox5 = BigInt("523")
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const boolamLWQAo = await ETFXPoolJdcHQqc.increaseAllowance.call(addressAt5op3f, uintAOJUwVn, {from: accounts[1]});
		const uint256PVt70mZ = await ETFXPoolJdcHQqc.allowance.call(addressMS9IJOg, addressNa2558k, {from: accounts[2]});
		const uint256iVeE6Ce = await ETFXPoolJdcHQqc.withdraw.call(uintNzH9g8n, {from: accounts[0]});
		const uint256rDyAetY = await ETFXPoolJdcHQqc.earned.call(addressHBwF4g8, {from: accounts[2]});
		const uint256cK65wBC = await ETFXPoolJdcHQqc.stake.call(uintSrDH4nJ, {from: accounts[3]});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uintxf20ox5, {from: accounts[2]});

		assert.equal(boolamLWQAo, true)
		assert.equal(uint256PVt70mZ, BigInt("0"))
		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.withdraw.call(uintNzH9g8n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const addressNIVSOCy = accounts[3]
		const uintVM5aBQH = BigInt("510")
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		await ETFXPoolJdcHQqc.exit.call({from: accounts[0]});
		await ETFXPoolJdcHQqc.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rDyAetY = await ETFXPoolJdcHQqc.earned.call(addressNIVSOCy, {from: accounts[2]});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uintVM5aBQH, {from: accounts[2]});

		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintpgzneOE = BigInt("1459")
		const addresszJswv7r = accounts[1]
		const addressD1rBVjV = accounts[3]
		const addressL5DRbjx = accounts[4]
		const uintwL8PFgF = BigInt("510")
		const boolWtqXAt = await ETFXPoolJdcHQqc.transferFrom.call(addressD1rBVjV, addresszJswv7r, uintpgzneOE, {from: accounts[3]});
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const uint256rDyAetY = await ETFXPoolJdcHQqc.earned.call(addressL5DRbjx, {from: accounts[2]});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uintwL8PFgF, {from: accounts[2]});

		await expect(ETFXPoolJdcHQqc.transferFrom.call(addressD1rBVjV, addresszJswv7r, uintpgzneOE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintDfSkGUq = BigInt("510")
		const uint8tqD2w6 = await ETFXPoolJdcHQqc.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uintDfSkGUq, {from: accounts[2]});

		assert.equal(uint8tqD2w6, BigInt("8"))
		await expect(ETFXPoolJdcHQqc.stake.call(uintDfSkGUq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintIK386zT = BigInt("1790")
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const stringamQ9QTR = await ETFXPoolJdcHQqc.name.call({from: accounts[3]});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uintIK386zT, {from: accounts[2]});

		assert.equal(stringamQ9QTR, "ETFX-FARM")
		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.stake.call(uintIK386zT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintblQjFds = BigInt("1315")
		const addresszUeb3bm = accounts[4]
		const addressZy48weR = "0x0000000000000000000000000000000000000001"
		const uintB9oLso9 = BigInt("477")
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const addresszAS96rK = await ETFXPoolJdcHQqc.owner.call({from: accounts[3]});
		const booltjdT1RB = await ETFXPoolJdcHQqc.transferFrom.call(addressZy48weR, addresszUeb3bm, uintblQjFds, {from: accounts[2]});
		const uint256lVZiOt8 = await ETFXPoolJdcHQqc.stake.call(uintB9oLso9, {from: accounts[2]});

		assert.equal(addresszAS96rK, 0x694c481ef19D93C801b696615db89938D3548cDb)
		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.transferFrom.call(addressZy48weR, addresszUeb3bm, uintblQjFds, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const stringHvP275N = await ETFXPoolJdcHQqc.symbol.call({from: accounts[2]});
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});

		assert.equal(stringHvP275N, "FETFX")
		assert.equal(uint256n1FBXHI, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintAq2I6Qz = BigInt("1425")
		const addressnZ3l6QD = accounts[4]
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const boolDAmQfA1 = await ETFXPoolJdcHQqc.approve.call(addressnZ3l6QD, uintAq2I6Qz, {from: accounts[1]});

		assert.equal(boolDAmQfA1, true)
		assert.equal(uint256n1FBXHI, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintwgo0yZQ = BigInt("162")
		const addresshH5pCwt = accounts[4]
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		const boolSFy8Xl8 = await ETFXPoolJdcHQqc.decreaseAllowance.call(addresshH5pCwt, uintwgo0yZQ, {from: accounts[3]});

		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.decreaseAllowance.call(addresshH5pCwt, uintwgo0yZQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const addressZZyYU1N = accounts[4]
		const addressEmozTUH = accounts[0]
		const uint256X4rqp8n = await ETFXPoolJdcHQqc.balanceOf.call(addressZZyYU1N, {from: accounts[0]});
		const addressYq6DuR = await ETFXPoolJdcHQqc.transferOwnership.call(addressEmozTUH, {from: accounts[2]});
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256X4rqp8n, BigInt("0"))
		assert.equal(uint256n1FBXHI, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolJdcHQqc = await ETFXPool.new({from: accounts[2]});
		const uintbfiCiPY = BigInt("1395")
		const uint256n1FBXHI = await ETFXPoolJdcHQqc.rewardPerToken.call({from: accounts[1]});
		await ETFXPoolJdcHQqc.renounceOwnership.call({from: accounts[2]});
		const uint256Duv6x2c = await ETFXPoolJdcHQqc.withdraw.call(uintbfiCiPY, {from: accounts[2]});

		assert.equal(uint256n1FBXHI, BigInt("0"))
		await expect(ETFXPoolJdcHQqc.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})