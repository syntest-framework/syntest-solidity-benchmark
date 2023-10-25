const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADC86RFWS = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGu0ItO7 = BigInt("983")
		const addressr7fy9x = accounts[2]
		const uintjFaQLjV = BigInt("384")
		const addressT1E5JF1 = accounts[1]
		const uintIxWk1hs = BigInt("1398")
		const addressBTocfsS = accounts[1]
		const addresseQRDXsK = accounts[2]
		const addressF12eQ0D = accounts[4]
		const boolmXKeejz = await ZADC86RFWS.approve.call(addressr7fy9x, uintGu0ItO7, {from: accounts[0]});
		const stringyKI4JJ = await ZADC86RFWS.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolQ1zB1S = await ZADC86RFWS.transfer.call(addressT1E5JF1, uintjFaQLjV, {from: accounts[1]});
		const boolncMBkdq = await ZADC86RFWS.increaseAllowance.call(addressBTocfsS, uintIxWk1hs, {from: accounts[0]});
		const uint256x1BbSp = await ZADC86RFWS.allowance.call(addressF12eQ0D, addresseQRDXsK, {from: accounts[1]});
	});

	it('test for ZAD', async () => {
		const ZADsGZGQPJ = await ZAD.new({from: accounts[2]});
		const uintdJ39Ak6 = BigInt("2031")
		const addressntIs3Lr = accounts[5]
		const uintbfUUwpq = BigInt("1672")
		const addressJzkL49a = accounts[2]
		const uintbdLXZTS = BigInt("485")
		const addressmBttrTT = accounts[3]
		const stringRbkdp6w = await ZADsGZGQPJ.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBColVq = await ZADsGZGQPJ.decreaseAllowance.call(addressntIs3Lr, uintdJ39Ak6, {from: accounts[5]});
		const bools0sTuZh = await ZADsGZGQPJ.increaseAllowance.call(addressJzkL49a, uintbfUUwpq, {from: accounts[0]});
		const booljLCnLvw = await ZADsGZGQPJ.transfer.call(addressmBttrTT, uintbdLXZTS, {from: accounts[0]});

		assert.equal(stringRbkdp6w, "Zadkiel")
		await expect(ZADsGZGQPJ.decreaseAllowance.call(addressntIs3Lr, uintdJ39Ak6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADzxsfwtL = await ZAD.new({from: accounts[4]});
		const uint5nf8Ig = BigInt("1285")
		const uintsr2CbB = BigInt("489")
		const addressRlIaPlY = accounts[1]
		const uintiEAtHrc = BigInt("222")
		const addressX7FwBU = "0x0000000000000000000000000000000000000001"
		const uintWC0UNkW = BigInt("1954")
		const address0UQRGO = accounts[1]
		const uint256Xrsj4FT = await ZADzxsfwtL._burn.call(uint5nf8Ig, {from: accounts[4]});
		const boolkSFqF6L = await ZADzxsfwtL.approve.call(addressRlIaPlY, uintsr2CbB, {from: "0x0000000000000000000000000000000000000001"});
		const boolMfk46F = await ZADzxsfwtL.increaseAllowance.call(addressX7FwBU, uintiEAtHrc, {from: accounts[2]});
		const boold8kLZh7 = await ZADzxsfwtL.approve.call(address0UQRGO, uintWC0UNkW, {from: accounts[5]});

		await expect(ZADzxsfwtL._burn.call(uint5nf8Ig, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADw2uyMj = await ZAD.new({from: accounts[0]});
		const uintghmMJbY = BigInt("1092")
		const addresslmwsIPj = accounts[0]
		const stringPtlxfYA = await ZADw2uyMj.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolNxruThP = await ZADw2uyMj.increaseAllowance.call(addresslmwsIPj, uintghmMJbY, {from: accounts[0]});
		const stringV0HHI0Y = await ZADw2uyMj.symbol.call({from: accounts[2]});
		const uint256aV6QCXe = await ZADw2uyMj.totalSupply.call({from: accounts[1]});
		const stringSP7MXVY = await ZADw2uyMj.name.call({from: accounts[2]});
		const stringd1LuMs9 = await ZADw2uyMj.symbol.call({from: accounts[4]});

		assert.equal(boolNxruThP, true)
		assert.equal(stringPtlxfYA, "Zadkiel")
		assert.equal(stringSP7MXVY, "Zadkiel")
		assert.equal(stringV0HHI0Y, "ZAD")
		assert.equal(stringd1LuMs9, "ZAD")
		assert.equal(uint256aV6QCXe, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADh9wFxFV = await ZAD.new({from: accounts[3]});
		const addressK0mka5I = accounts[0]
		const addressvH0NIiQ = "0x0000000000000000000000000000000000000001"
		const uint256kfHFFgG = await ZADh9wFxFV.totalSupply.call({from: accounts[2]});
		const uint256ZsMqbA4 = await ZADh9wFxFV.balanceOf.call(addressK0mka5I, {from: accounts[1]});
		const uint256V9iR9vl = await ZADh9wFxFV.balanceOf.call(addressvH0NIiQ, {from: accounts[3]});

		assert.equal(uint256V9iR9vl, BigInt("0"))
		assert.equal(uint256ZsMqbA4, BigInt("0"))
		assert.equal(uint256kfHFFgG, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADrj8xAmR = await ZAD.new({from: accounts[0]});
		const uintYr9GGRG = BigInt("1511")
		const addressKqtg4Zm = "0x0000000000000000000000000000000000000001"
		const uint256v8MSCKz = await ZADrj8xAmR.totalSupply.call({from: accounts[4]});
		const booluAdJO8O = await ZADrj8xAmR.approve.call(addressKqtg4Zm, uintYr9GGRG, {from: accounts[3]});
		const uint256TlXKFda = await ZADrj8xAmR.totalSupply.call({from: accounts[0]});

		assert.equal(booluAdJO8O, true)
		assert.equal(uint256TlXKFda, BigInt("100000000000000000000000000"))
		assert.equal(uint256v8MSCKz, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADpCFbJKi = await ZAD.new({from: accounts[4]});
		const addressc1JMmX7 = accounts[3]
		const uintJTtA7dX = BigInt("1240")
		const addressR9JYBW = accounts[5]
		const addressLKXgyU = accounts[3]
		const addresslaAxhch = accounts[5]
		const addressINmT8hd = accounts[3]
		const uint256QURbOR = await ZADpCFbJKi.balanceOf.call(addressc1JMmX7, {from: accounts[0]});
		const boolupBoAp5 = await ZADpCFbJKi.transferFrom.call(addressLKXgyU, addressR9JYBW, uintJTtA7dX, {from: accounts[3]});
		const uint256l0ZdiDx = await ZADpCFbJKi.allowance.call(addressINmT8hd, addresslaAxhch, {from: accounts[3]});

		assert.equal(uint256QURbOR, BigInt("0"))
		await expect(ZADpCFbJKi.transferFrom.call(addressLKXgyU, addressR9JYBW, uintJTtA7dX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAd3NfjA = await ZAD.new({from: accounts[4]});
		const uintPy1FiFT = BigInt("793")
		const addressAKRcWhe = accounts[2]
		const uintLdULIxb = BigInt("717")
		const uintBwXzFk = BigInt("1936")
		const addressK9RDKll = "0x0000000000000000000000000000000000000001"
		const uint8enhuPSm = await ZADAd3NfjA.decimals.call({from: accounts[4]});
		const boolsgGruC0 = await ZADAd3NfjA.increaseAllowance.call(addressAKRcWhe, uintPy1FiFT, {from: accounts[2]});
		const uint256yNLN4ss = await ZADAd3NfjA._burn.call(uintLdULIxb, {from: accounts[2]});
		const stringrbTR4QN = await ZADAd3NfjA.symbol.call({from: accounts[2]});
		const boolqGSKEld = await ZADAd3NfjA.transfer.call(addressK9RDKll, uintBwXzFk, {from: accounts[5]});

		assert.equal(boolsgGruC0, true)
		assert.equal(uint8enhuPSm, BigInt("18"))
		await expect(ZADAd3NfjA._burn.call(uintLdULIxb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADsGZGQPJ = await ZAD.new({from: accounts[2]});
		const uintLHaR2cD = BigInt("1975")
		const addressEzi5wIK = accounts[0]
		const uintsVOjAsL = BigInt("485")
		const address3eHVZm = accounts[3]
		const uintP5NmNGO = BigInt("649")
		const addressCEX6Jtg = accounts[4]
		const stringRbkdp6w = await ZADsGZGQPJ.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolz0zsEWk = await ZADsGZGQPJ.transfer.call(addressEzi5wIK, uintLHaR2cD, {from: accounts[1]});
		const booljLCnLvw = await ZADsGZGQPJ.transfer.call(address3eHVZm, uintsVOjAsL, {from: accounts[0]});
		const boolXd8gSby = await ZADsGZGQPJ.increaseAllowance.call(addressCEX6Jtg, uintP5NmNGO, {from: "0x0000000000000000000000000000000000000001"});
		const stringq3jSnMm = await ZADsGZGQPJ.symbol.call({from: accounts[4]});

		assert.equal(stringRbkdp6w, "Zadkiel")
		await expect(ZADsGZGQPJ.transfer.call(addressEzi5wIK, uintLHaR2cD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADC97chK = await ZAD.new({from: accounts[2]});
		const addressKvLsMY3 = accounts[0]
		const addressXz1D7T7 = accounts[1]
		const uint256GKXwBrC = await ZADC97chK.allowance.call(addressXz1D7T7, addressKvLsMY3, {from: accounts[1]});
		const uint256G8PZ9LG = await ZADC97chK.totalSupply.call({from: accounts[2]});

		assert.equal(uint256G8PZ9LG, BigInt("100000000000000000000000000"))
		assert.equal(uint256GKXwBrC, BigInt("0"))
	});
})