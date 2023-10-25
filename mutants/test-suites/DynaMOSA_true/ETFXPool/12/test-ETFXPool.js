const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolqv3Tlrf = await ETFXPool.new({from: accounts[1]});
//		await ETFXPoolqv3Tlrf.exit.call({from: accounts[2]});
//		await ETFXPoolqv3Tlrf.renounceOwnership.call({from: accounts[5]});

		await expect(ETFXPoolqv3Tlrf.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolt1qDKK0 = await ETFXPool.new({from: accounts[2]});
		const addressaUhpKk1 = accounts[2]
//		await ETFXPoolt1qDKK0.nonReentrant.call({from: accounts[0]});
//		const uint256M5h3NHh = await ETFXPoolt1qDKK0.totalSupply.call({from: accounts[5]});
//		await ETFXPoolt1qDKK0.renounceOwnership.call({from: accounts[1]});
//		const addressXwuLoJ = await ETFXPoolt1qDKK0.transferOwnership.call(addressaUhpKk1, {from: accounts[2]});

		await expect(ETFXPoolt1qDKK0.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringEvPbrf4 = "UX6cbcb1KcnorB5OSWGbxziYrNpKM4y5XzIMde8tygAYysSqOAJPqSOGMLB4n"
		const stringmUSfMLW = "BA1t2r6tJ8bY7cpocaUUeP2T6TgRv6Jzsa1Ede"
		const uintc7CrAh2 = BigInt("230")
		const ETFXPoolFj9FXQE = await ETFXPool.new(stringEvPbrf4, stringmUSfMLW, uintc7CrAh2, {from: accounts[1]});
		const uint5EEgdp = BigInt("1752")
		const uintlsM0q6 = BigInt("1513")
		const uintj91RTqY = BigInt("1293")
		const addressGeubhI = accounts[5]
		const addressd7ExhA = accounts[1]
		await ETFXPoolFj9FXQE.getReward.call({from: accounts[2]});
		const uint256Nt2sURB = await ETFXPoolFj9FXQE.stake.call(uint5EEgdp, {from: accounts[3]});
		const addressuiMTT8U = await ETFXPoolFj9FXQE.owner.call({from: accounts[3]});
		const uint256Jouat6 = await ETFXPoolFj9FXQE.stake.call(uintlsM0q6, {from: "0x0000000000000000000000000000000000000001"});
		const boolBnGrn7l = await ETFXPoolFj9FXQE.transferFrom.call(addressd7ExhA, addressGeubhI, uintj91RTqY, {from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolb30D9UI = await ETFXPool.new({from: accounts[1]});
		const uint8Gfz3vDr = await ETFXPoolb30D9UI.decimals.call({from: accounts[0]});
		const stringf1s4DPI = await ETFXPoolb30D9UI.symbol.call({from: accounts[0]});
		const uint25622LyRJ = await ETFXPoolb30D9UI.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringf1s4DPI, "FETFX")
		assert.equal(uint25622LyRJ, BigInt("0"))
		assert.equal(uint8Gfz3vDr, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolsKG06ow = await ETFXPool.new({from: accounts[3]});
		const uint6e8F10 = BigInt("211")
		const addressIxBUzsD = accounts[0]
		const uintGSq7R4Z = BigInt("1667")
		const uintFChdrWe = BigInt("1921")
		const addressrquodk = accounts[1]
		const boolfRI4zjq = await ETFXPoolsKG06ow.approve.call(addressIxBUzsD, uint6e8F10, {from: accounts[4]});
//		const uint256SPxOzz = await ETFXPoolsKG06ow.stake.call(uintGSq7R4Z, {from: accounts[0]});
//		const boolTrMhUiw = await ETFXPoolsKG06ow.decreaseAllowance.call(addressrquodk, uintFChdrWe, {from: accounts[3]});
//		await ETFXPoolsKG06ow.onlyOwner.call({from: accounts[4]});

		assert.equal(boolfRI4zjq, true)
		await expect(ETFXPoolsKG06ow.stake.call(uintGSq7R4Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvZxTpaO = await ETFXPool.new({from: accounts[1]});
		const uintg5skFNN = BigInt("1029")
		const addressBXxr1bG = accounts[5]
		const addressOP3iU6L = accounts[4]
		const addressQgWeid = accounts[1]
		const uintUIHrjh = BigInt("1203")
		const boolPVHJUpP = await ETFXPoolvZxTpaO.approve.call(addressBXxr1bG, uintg5skFNN, {from: accounts[2]});
		const uint256FS02OhM = await ETFXPoolvZxTpaO.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const stringDULjz4A = await ETFXPoolvZxTpaO.name.call({from: accounts[4]});
		const uint256K3ghbxs = await ETFXPoolvZxTpaO.allowance.call(addressQgWeid, addressOP3iU6L, {from: accounts[1]});
//		const uint256VVEGqmj = await ETFXPoolvZxTpaO.stake.call(uintUIHrjh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPVHJUpP, true)
		assert.equal(stringDULjz4A, "ETFX-FARM")
		assert.equal(uint256FS02OhM, BigInt("0"))
		assert.equal(uint256K3ghbxs, BigInt("0"))
		await expect(ETFXPoolvZxTpaO.stake.call(uintUIHrjh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhXKIYyS = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYWIWAxQ = BigInt("1243")
		const addressXRiphjV = accounts[3]
		const boolIbGOGqJ = await ETFXPoolhXKIYyS.increaseAllowance.call(addressXRiphjV, uintYWIWAxQ, {from: accounts[4]});
		await ETFXPoolhXKIYyS.renounceOwnership.call({from: accounts[3]});
		const stringrNauwTh = await ETFXPoolhXKIYyS.symbol.call({from: accounts[2]});
		const uint256H6Qo6EH = await ETFXPoolhXKIYyS.rewardPerToken.call({from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolt1qDKK0 = await ETFXPool.new({from: accounts[2]});
		const addressrVgU3G4 = accounts[2]
		const addressG4iOVED = accounts[3]
		const addressxIdstv8 = await ETFXPoolt1qDKK0.transferOwnership.call(addressrVgU3G4, {from: accounts[2]});
//		await ETFXPoolt1qDKK0.nonReentrant.call({from: accounts[0]});
//		const uint256M5h3NHh = await ETFXPoolt1qDKK0.totalSupply.call({from: accounts[5]});
//		await ETFXPoolt1qDKK0.renounceOwnership.call({from: accounts[1]});
//		const addressXwuLoJ = await ETFXPoolt1qDKK0.transferOwnership.call(addressG4iOVED, {from: accounts[2]});

		await expect(ETFXPoolt1qDKK0.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolhchzeBf = await ETFXPool.new({from: accounts[3]});
		const addressD4f3hpS = accounts[4]
		const addressdCdKPI = accounts[2]
		const addressJklACGM = accounts[0]
		const uintsVjrVCu = BigInt("854")
		const addressiMK03V7 = accounts[1]
		const addressZ6JsAH = accounts[1]
		const addressxPMwnh = accounts[1]
//		const addresszREwRXc = await ETFXPoolhchzeBf.transferOwnership.call(addressD4f3hpS, {from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolhchzeBf.renounceOwnership.call({from: accounts[3]});
//		const uint256SbOB8L = await ETFXPoolhchzeBf.allowance.call(addressJklACGM, addressdCdKPI, {from: accounts[4]});
//		const boollp5lnUI = await ETFXPoolhchzeBf.transferFrom.call(addressZ6JsAH, addressiMK03V7, uintsVjrVCu, {from: accounts[5]});
//		const uint256VvdyqUC = await ETFXPoolhchzeBf.earned.call(addressxPMwnh, {from: accounts[0]});

		await expect(ETFXPoolhchzeBf.transferOwnership.call(addressD4f3hpS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvZxTpaO = await ETFXPool.new({from: accounts[1]});
		const uintRPmz7gs = BigInt("1164")
		const addresss54ShAE = accounts[0]
		const addressVt5S75q = accounts[3]
		const uintnmqwdSN = BigInt("1029")
		const addresszkCBbgx = accounts[5]
		const addressrJR8oz4 = accounts[4]
		const addressQpekLPs = accounts[1]
		const uintohInyZ = BigInt("1203")
//		const boolphSSPqo = await ETFXPoolvZxTpaO.transferFrom.call(addressVt5S75q, addresss54ShAE, uintRPmz7gs, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPVHJUpP = await ETFXPoolvZxTpaO.approve.call(addresszkCBbgx, uintnmqwdSN, {from: accounts[2]});
//		const uint256FS02OhM = await ETFXPoolvZxTpaO.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringDULjz4A = await ETFXPoolvZxTpaO.name.call({from: accounts[4]});
//		const uint256K3ghbxs = await ETFXPoolvZxTpaO.allowance.call(addressQpekLPs, addressrJR8oz4, {from: accounts[1]});
//		const uint256VVEGqmj = await ETFXPoolvZxTpaO.stake.call(uintohInyZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolvZxTpaO.transferFrom.call(addressVt5S75q, addresss54ShAE, uintRPmz7gs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYvhI3qb = await ETFXPool.new({from: accounts[2]});
		const addresstRtJqgW = accounts[4]
		const addressUI6nyvA = accounts[3]
		const addressqzHpZsZ = accounts[1]
//		await ETFXPoolYvhI3qb.getReward.call({from: accounts[5]});
//		await ETFXPoolYvhI3qb.nonReentrant.call({from: accounts[0]});
//		const uint256BONPlUb = await ETFXPoolYvhI3qb.balanceOf.call(addresstRtJqgW, {from: accounts[5]});
//		const uint256IlJhLdW = await ETFXPoolYvhI3qb.allowance.call(addressqzHpZsZ, addressUI6nyvA, {from: accounts[4]});

		await expect(ETFXPoolYvhI3qb.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolsKG06ow = await ETFXPool.new({from: accounts[3]});
		const uintw8xhb7T = BigInt("211")
		const addressaewFyio = accounts[0]
		const uintZQtQlMr = BigInt("1921")
		const addressbhgTWbe = accounts[1]
		const boolfRI4zjq = await ETFXPoolsKG06ow.approve.call(addressaewFyio, uintw8xhb7T, {from: accounts[4]});
//		const boolTrMhUiw = await ETFXPoolsKG06ow.decreaseAllowance.call(addressbhgTWbe, uintZQtQlMr, {from: accounts[3]});
//		await ETFXPoolsKG06ow.onlyOwner.call({from: accounts[4]});

		assert.equal(boolfRI4zjq, true)
		await expect(ETFXPoolsKG06ow.decreaseAllowance.call(addressbhgTWbe, uintZQtQlMr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvZxTpaO = await ETFXPool.new({from: accounts[1]});
		const uintNeEtgUf = BigInt("1029")
		const addresscWWB8e = accounts[5]
		const uintItZM002 = BigInt("1965")
		const addressuQwTRZX = accounts[3]
		const addressegBMXvE = accounts[4]
		const addressBaRseL = accounts[1]
		const uintRlu8U6q = BigInt("1203")
		const boolPVHJUpP = await ETFXPoolvZxTpaO.approve.call(addresscWWB8e, uintNeEtgUf, {from: accounts[2]});
		const stringDULjz4A = await ETFXPoolvZxTpaO.name.call({from: accounts[4]});
//		const boolwGEAUhB = await ETFXPoolvZxTpaO.transfer.call(addressuQwTRZX, uintItZM002, {from: accounts[1]});
//		const uint256K3ghbxs = await ETFXPoolvZxTpaO.allowance.call(addressBaRseL, addressegBMXvE, {from: accounts[1]});
//		const uint256VVEGqmj = await ETFXPoolvZxTpaO.stake.call(uintRlu8U6q, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPVHJUpP, true)
		assert.equal(stringDULjz4A, "ETFX-FARM")
		await expect(ETFXPoolvZxTpaO.transfer.call(addressuQwTRZX, uintItZM002, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolCzCegH = await ETFXPool.new({from: accounts[3]});
		const uinte1frR3y = BigInt("1098")
		const uint7DSOJO = BigInt("215")
		const addressTjJdjtw = accounts[2]
		const addresslqV7VxD = await ETFXPoolCzCegH.owner.call({from: accounts[4]});
		const uint8S8mXpa = await ETFXPoolCzCegH.decimals.call({from: accounts[2]});
//		const uint256qrt3SHj = await ETFXPoolCzCegH.withdraw.call(uinte1frR3y, {from: accounts[0]});
//		const booloWGUR3p = await ETFXPoolCzCegH.transfer.call(addressTjJdjtw, uint7DSOJO, {from: accounts[3]});

		assert.equal(addresslqV7VxD, 0x3ef87C81fb8Fa1EBBC7592b861D784D73748Eb66)
		assert.equal(uint8S8mXpa, BigInt("8"))
		await expect(ETFXPoolCzCegH.withdraw.call(uinte1frR3y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFKxmvtv = await ETFXPool.new({from: accounts[4]});
		const addresskrtitQj = accounts[0]
		const addresszH8klDc = accounts[4]
		const addressxkRoG2x = accounts[1]
		const addressWII6rk3 = accounts[4]
		const uint256brErqEj = await ETFXPoolFKxmvtv.balanceOf.call(addresskrtitQj, {from: accounts[1]});
//		await ETFXPoolFKxmvtv.renounceOwnership.call({from: accounts[4]});
//		const addressSJTtgnd = await ETFXPoolFKxmvtv.transferOwnership.call(addresszH8klDc, {from: accounts[2]});
//		await ETFXPoolFKxmvtv.nonReentrant.call({from: accounts[2]});
//		await ETFXPoolFKxmvtv.getReward.call({from: accounts[4]});
//		const uint256JbRGEtq = await ETFXPoolFKxmvtv.allowance.call(addressWII6rk3, addressxkRoG2x, {from: accounts[2]});

		assert.equal(uint256brErqEj, BigInt("0"))
		await expect(ETFXPoolFKxmvtv.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolsKG06ow = await ETFXPool.new({from: accounts[3]});
		const uintZXU5cNh = BigInt("1028")
		const addresspk32V5s = accounts[0]
		const uintsiPlIVk = BigInt("1906")
		const addresssYukUw7 = accounts[2]
		const bool37QCfc = await ETFXPoolsKG06ow.increaseAllowance.call(addresspk32V5s, uintZXU5cNh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolTrMhUiw = await ETFXPoolsKG06ow.decreaseAllowance.call(addresssYukUw7, uintsiPlIVk, {from: accounts[3]});

		assert.equal(bool37QCfc, true)
		await expect(ETFXPoolsKG06ow.decreaseAllowance.call(addresssYukUw7, uintsiPlIVk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})