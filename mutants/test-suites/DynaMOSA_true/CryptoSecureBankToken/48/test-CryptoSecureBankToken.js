const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenA9DpDmB = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressTRx07II = accounts[2]
//		await CryptoSecureBankTokenA9DpDmB.unpause.call({from: accounts[2]});
//		await CryptoSecureBankTokenA9DpDmB.unpause.call({from: accounts[1]});
//		const addresssx48o5N = await CryptoSecureBankTokenA9DpDmB.setOwner2.call(addressTRx07II, {from: accounts[0]});

		await expect(CryptoSecureBankTokenA9DpDmB.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeny1x19jH = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressx5Ieph = accounts[2]
		const addressfsREb0k = accounts[1]
		const addressrnrloFg = accounts[4]
		const uintj2vvPq5 = await CryptoSecureBankTokeny1x19jH.allowance.call(addressfsREb0k, addressx5Ieph, {from: accounts[2]});
//		const addressFJIB905 = await CryptoSecureBankTokeny1x19jH.destroyBlackFunds.call(addressrnrloFg, {from: accounts[5]});

		assert.equal(uintj2vvPq5, BigInt("0"))
		await expect(CryptoSecureBankTokeny1x19jH.destroyBlackFunds.call(addressrnrloFg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZFYzXid = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressoMdL5xy = accounts[0]
		const addresslrLOXap = accounts[1]
		const uintsf4ca6D = BigInt("1643")
		const addressFQA7QAV = accounts[1]
		const uintSBpTObd = BigInt("1855")
		const addressHLpSjGw = accounts[1]
		const uintF5BQFk = BigInt("1411")
		const uintVuNJfq = BigInt("1924")
		const uintu7DL5fU = BigInt("1826")
		const addressOkrJ5t = accounts[1]
		const addressesRtKSj = accounts[5]
		const uinth8BfBkL = await CryptoSecureBankTokenZFYzXid.allowance.call(addresslrLOXap, addressoMdL5xy, {from: accounts[4]});
		const boolgj5h5E9 = await CryptoSecureBankTokenZFYzXid.approve.call(addressFQA7QAV, uintsf4ca6D, {from: accounts[0]});
//		const boolrykMaT2 = await CryptoSecureBankTokenZFYzXid.transfer.call(addressHLpSjGw, uintSBpTObd, {from: accounts[4]});
//		const uintUKEiioY = await CryptoSecureBankTokenZFYzXid.onlyPayloadSize.call(uintF5BQFk, {from: accounts[0]});
//		const uintqsGuuEz = await CryptoSecureBankTokenZFYzXid.setParams.call(uintu7DL5fU, uintVuNJfq, {from: accounts[1]});
//		const uintL9BhhW6 = await CryptoSecureBankTokenZFYzXid.allowance.call(addressesRtKSj, addressOkrJ5t, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolgj5h5E9, true)
		assert.equal(uinth8BfBkL, BigInt("0"))
		await expect(CryptoSecureBankTokenZFYzXid.transfer.call(addressHLpSjGw, uintSBpTObd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAliSWLv = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresskymaFcZ = accounts[5]
		const addresskCGym2x = "0x0000000000000000000000000000000000000001"
		const addressMDRjBd0 = accounts[1]
		const addressG9ITrAJ = accounts[1]
		const boollHfWWFV = await CryptoSecureBankTokenAliSWLv.getBlackListStatus.call(addresskymaFcZ, {from: accounts[5]});
//		const addressRI91Y05 = await CryptoSecureBankTokenAliSWLv.transferOwnership.call(addresskCGym2x, {from: accounts[2]});
//		const boolKYYi0Bi = await CryptoSecureBankTokenAliSWLv.getBlackListStatus.call(addressMDRjBd0, {from: accounts[4]});
//		await CryptoSecureBankTokenAliSWLv.pause.call({from: accounts[0]});
//		const uintAGsoelV = await CryptoSecureBankTokenAliSWLv.balanceOf.call(addressG9ITrAJ, {from: accounts[4]});

		assert.equal(boollHfWWFV, false)
		await expect(CryptoSecureBankTokenAliSWLv.transferOwnership.call(addresskCGym2x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenq69NdHE = await CryptoSecureBankToken.new({from: accounts[1]});
		const uinti4ps7JN = BigInt("1564")
		const addressJ1Ffy7O = accounts[4]
		const uintOie6zGh = BigInt("59")
		const addressHADtL9N = "0x0000000000000000000000000000000000000001"
		const addresseyzw5i3 = accounts[2]
//		await CryptoSecureBankTokenq69NdHE.onlyOwner.call({from: accounts[2]});
//		const boolU9ELDH2 = await CryptoSecureBankTokenq69NdHE.approve.call(addressJ1Ffy7O, uinti4ps7JN, {from: accounts[1]});
//		const boolTyPnzQb = await CryptoSecureBankTokenq69NdHE.transferFrom.call(addresseyzw5i3, addressHADtL9N, uintOie6zGh, {from: accounts[4]});

		await expect(CryptoSecureBankTokenq69NdHE.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenL2lZtuy = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintyJ7RAfP = BigInt("602")
		const addressMAsOZfr = accounts[4]
		const addressjKcL7Lx = accounts[3]
		const uintBK2jeU5 = BigInt("600")
		const addressUa2YXP3 = accounts[4]
		const addressILVBNyo = accounts[4]
		const uints4UVVDC = BigInt("1281")
		const addressqz9lOjw = accounts[0]
		const addressuUg4LGx = accounts[1]
//		const boolg2XyWD9 = await CryptoSecureBankTokenL2lZtuy.transferFrom.call(addressjKcL7Lx, addressMAsOZfr, uintyJ7RAfP, {from: accounts[2]});
//		await CryptoSecureBankTokenL2lZtuy.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		const booljIGZOgt = await CryptoSecureBankTokenL2lZtuy.transferFrom.call(addressILVBNyo, addressUa2YXP3, uintBK2jeU5, {from: accounts[1]});
//		const boolNizT2tH = await CryptoSecureBankTokenL2lZtuy.transferFrom.call(addressuUg4LGx, addressqz9lOjw, uints4UVVDC, {from: accounts[5]});

		await expect(CryptoSecureBankTokenL2lZtuy.transferFrom.call(addressjKcL7Lx, addressMAsOZfr, uintyJ7RAfP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenV6r9s6 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressS2C79yL = accounts[3]
		const addressA8n2kvE = accounts[0]
		const uintnFOtqVF = BigInt("1347")
		const addressBlQS4eu = accounts[4]
		const addressNDREToe = await CryptoSecureBankTokenV6r9s6.getOwner.call({from: accounts[1]});
		const uintCrgI1GN = await CryptoSecureBankTokenV6r9s6.allowance.call(addressA8n2kvE, addressS2C79yL, {from: accounts[1]});
//		const boolXSt5eps = await CryptoSecureBankTokenV6r9s6.transfer.call(addressBlQS4eu, uintnFOtqVF, {from: accounts[2]});

		assert.equal(addressNDREToe, 0x8cB54A5259CC55DC28c281C572717Bbd8361a111)
		assert.equal(uintCrgI1GN, BigInt("0"))
		await expect(CryptoSecureBankTokenV6r9s6.transfer.call(addressBlQS4eu, uintnFOtqVF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAliSWLv = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressYYa5PSz = accounts[5]
		const addressAhMcrRY = "0x0000000000000000000000000000000000000001"
		const addresseZ0hW2 = accounts[1]
		const addressVKdElNQ = accounts[1]
		const uintPUJlKdn = await CryptoSecureBankTokenAliSWLv.totalSupply.call({from: accounts[2]});
		const boollHfWWFV = await CryptoSecureBankTokenAliSWLv.getBlackListStatus.call(addressYYa5PSz, {from: accounts[5]});
//		const addressRI91Y05 = await CryptoSecureBankTokenAliSWLv.transferOwnership.call(addressAhMcrRY, {from: accounts[2]});
//		const boolKYYi0Bi = await CryptoSecureBankTokenAliSWLv.getBlackListStatus.call(addresseZ0hW2, {from: accounts[4]});
//		await CryptoSecureBankTokenAliSWLv.pause.call({from: accounts[0]});
//		const uintAGsoelV = await CryptoSecureBankTokenAliSWLv.balanceOf.call(addressVKdElNQ, {from: accounts[4]});

		assert.equal(boollHfWWFV, false)
		assert.equal(uintPUJlKdn, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenAliSWLv.transferOwnership.call(addressAhMcrRY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVJqlc17 = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintz3QwFmG = BigInt("1100")
		const addressny9YLUe = accounts[0]
		const addressQAVf8Vt = accounts[2]
		const uintgS7kE5M = await CryptoSecureBankTokenVJqlc17.totalSupply.call({from: accounts[4]});
		await CryptoSecureBankTokenVJqlc17.whenPaused.call({from: accounts[4]});
		await CryptoSecureBankTokenVJqlc17.unpause.call({from: accounts[2]});
		await CryptoSecureBankTokenVJqlc17.whenPaused.call({from: accounts[1]});
		const boolZqnKln5 = await CryptoSecureBankTokenVJqlc17.transferFrom.call(addressQAVf8Vt, addressny9YLUe, uintz3QwFmG, {from: accounts[2]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAliSWLv = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresstkreSX1 = accounts[5]
		const addressNWqRJAJ = accounts[1]
		const addressvQYlBgi = accounts[1]
		const boollHfWWFV = await CryptoSecureBankTokenAliSWLv.getBlackListStatus.call(addresstkreSX1, {from: accounts[5]});
		const boolKYYi0Bi = await CryptoSecureBankTokenAliSWLv.getBlackListStatus.call(addressNWqRJAJ, {from: accounts[4]});
		const uintAGsoelV = await CryptoSecureBankTokenAliSWLv.balanceOf.call(addressvQYlBgi, {from: accounts[4]});

		assert.equal(boolKYYi0Bi, false)
		assert.equal(boollHfWWFV, false)
		assert.equal(uintAGsoelV, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHelbzLM = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintH36k1G = BigInt("2028")
		const addressczGOVOO = accounts[0]
		const addressowuiSk = accounts[0]
		const boolc4EJUK = await CryptoSecureBankTokenHelbzLM.approve.call(addressczGOVOO, uintH36k1G, {from: accounts[5]});
		const addressRKn06S = await CryptoSecureBankTokenHelbzLM.addBlackList.call(addressowuiSk, {from: accounts[3]});

		assert.equal(boolc4EJUK, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenL2lZtuy = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintxDW8ikp = BigInt("778")
		const uintLwhecm = BigInt("578")
		const addressOVb1YO2 = accounts[5]
		const addresssRINB6f = accounts[3]
		const boolVDbt6en = await CryptoSecureBankTokenL2lZtuy.redeem.call(uintxDW8ikp, {from: accounts[3]});
//		const boolg2XyWD9 = await CryptoSecureBankTokenL2lZtuy.transferFrom.call(addresssRINB6f, addressOVb1YO2, uintLwhecm, {from: accounts[2]});

		assert.equal(boolVDbt6en, true)
		await expect(CryptoSecureBankTokenL2lZtuy.transferFrom.call(addresssRINB6f, addressOVb1YO2, uintLwhecm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAliSWLv = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressEhVl3Cx = accounts[5]
		const addressrx2mLF = accounts[1]
		const addressVoS2XBb = accounts[5]
		const uintGqQFXak = BigInt("1954")
		const uinttCHW6pF = BigInt("1292")
		const addresssqNVbs5 = accounts[4]
		const boollHfWWFV = await CryptoSecureBankTokenAliSWLv.getBlackListStatus.call(addressEhVl3Cx, {from: accounts[5]});
		const uintAGsoelV = await CryptoSecureBankTokenAliSWLv.balanceOf.call(addressrx2mLF, {from: accounts[4]});
//		const addressRT1yIJ7 = await CryptoSecureBankTokenAliSWLv.destroyBlackFunds.call(addressVoS2XBb, {from: accounts[4]});
//		const uintAC61K7S = await CryptoSecureBankTokenAliSWLv.setParams.call(uinttCHW6pF, uintGqQFXak, {from: accounts[2]});
//		const uintIj3zY33 = await CryptoSecureBankTokenAliSWLv.balanceOf.call(addresssqNVbs5, {from: accounts[2]});

		assert.equal(boollHfWWFV, false)
		assert.equal(uintAGsoelV, BigInt("0"))
		await expect(CryptoSecureBankTokenAliSWLv.destroyBlackFunds.call(addressVoS2XBb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenoH3prZn = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressVeA20Kg = accounts[5]
		const addressZY9sijY = accounts[2]
		const addressydcCE7L = accounts[4]
		const boolITMNuTD = await CryptoSecureBankTokenoH3prZn.deprecate.call(addressVeA20Kg, {from: accounts[1]});
		const uintqm3EY6M = await CryptoSecureBankTokenoH3prZn.allowance.call(addressydcCE7L, addressZY9sijY, {from: accounts[3]});
		const uintMvlO8rG = await CryptoSecureBankTokenoH3prZn.totalSupply.call({from: accounts[4]});
		const addresskaW1zIn = await CryptoSecureBankTokenoH3prZn.getOwner.call({from: accounts[3]});
//		await CryptoSecureBankTokenoH3prZn.unpause.call({from: accounts[1]});

		assert.equal(addresskaW1zIn, 0x85119064352036bAB9B06bF3F2D2195D07F668ec)
		assert.equal(boolITMNuTD, true)
		assert.equal(uintMvlO8rG, BigInt("100000000000000000000000000"))
		assert.equal(uintqm3EY6M, BigInt("0"))
		await expect(CryptoSecureBankTokenoH3prZn.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAliSWLv = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintnomnWmZ = BigInt("0")
		const addresspViEgzL = accounts[2]
		const uintwNn2kLG = BigInt("125")
		const addressTGNZpPb = accounts[3]
		const addressP41yoeS = accounts[0]
		const addressmTEhCMf = accounts[1]
		const boolwoEgJ5 = await CryptoSecureBankTokenAliSWLv.transfer.call(addresspViEgzL, uintnomnWmZ, {from: accounts[0]});
//		const boolEja8cT8 = await CryptoSecureBankTokenAliSWLv.transferFrom.call(addressP41yoeS, addressTGNZpPb, uintwNn2kLG, {from: accounts[3]});
//		const uintAGsoelV = await CryptoSecureBankTokenAliSWLv.balanceOf.call(addressmTEhCMf, {from: accounts[4]});

		assert.equal(boolwoEgJ5, true)
		await expect(CryptoSecureBankTokenAliSWLv.transferFrom.call(addressP41yoeS, addressTGNZpPb, uintwNn2kLG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenAliSWLv = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintotcaKeI = BigInt("0")
		const addressw40RDpm = accounts[2]
		const uintAIJamN = BigInt("126")
		const addressI3i3JFl = accounts[3]
		const addressiuQNgkM = accounts[0]
		const addresszYzvUcU = accounts[1]
		const addressWmSVJS9 = accounts[1]
//		await CryptoSecureBankTokenAliSWLv.pause.call({from: accounts[4]});
//		const boolwoEgJ5 = await CryptoSecureBankTokenAliSWLv.transfer.call(addressw40RDpm, uintotcaKeI, {from: accounts[0]});
//		const boolEja8cT8 = await CryptoSecureBankTokenAliSWLv.transferFrom.call(addressiuQNgkM, addressI3i3JFl, uintAIJamN, {from: accounts[3]});
//		const uintNwSnB5I = await CryptoSecureBankTokenAliSWLv.balanceOf.call(addresszYzvUcU, {from: accounts[0]});
//		const uintAGsoelV = await CryptoSecureBankTokenAliSWLv.balanceOf.call(addressWmSVJS9, {from: accounts[4]});

		await expect(CryptoSecureBankTokenAliSWLv.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeny1x19jH = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressABDnJat = accounts[2]
		const addressQ0W5Zg = accounts[4]
		const addressAvo8QQ = accounts[5]
		const addressaBwX1Z = accounts[4]
		const addressZcenios = accounts[6]
		const addressTRrLAl6 = await CryptoSecureBankTokeny1x19jH.setOwner2.call(addressABDnJat, {from: accounts[2]});
		const uintQuzuy9g = await CryptoSecureBankTokeny1x19jH.allowance.call(addressAvo8QQ, addressQ0W5Zg, {from: accounts[2]});
//		await CryptoSecureBankTokeny1x19jH.onlyOwner.call({from: accounts[3]});
//		const boolAeDdBrI = await CryptoSecureBankTokeny1x19jH.deprecate.call(addressaBwX1Z, {from: accounts[4]});
//		const addressFJIB905 = await CryptoSecureBankTokeny1x19jH.destroyBlackFunds.call(addressZcenios, {from: accounts[5]});

		assert.equal(uintQuzuy9g, BigInt("0"))
		await expect(CryptoSecureBankTokeny1x19jH.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhqdbAJ = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressjQdTr9X = accounts[1]
		const uintTWDMwkH = BigInt("807")
		const addressrfxkI90 = accounts[0]
		const uintRZ7sYKe = BigInt("2030")
		const uintiXhTQqp = BigInt("910")
		const addressZNtdJ2i = accounts[0]
		const addressOSL1Ae = await CryptoSecureBankTokenhqdbAJ.removeBlackList.call(addressjQdTr9X, {from: accounts[2]});
//		const boolgixekI1 = await CryptoSecureBankTokenhqdbAJ.transfer.call(addressrfxkI90, uintTWDMwkH, {from: accounts[0]});
//		const uintmlTZST7 = await CryptoSecureBankTokenhqdbAJ.setParams.call(uintiXhTQqp, uintRZ7sYKe, {from: "0x0000000000000000000000000000000000000001"});
//		const uintgYavAia = await CryptoSecureBankTokenhqdbAJ.balanceOf.call(addressZNtdJ2i, {from: accounts[3]});

		await expect(CryptoSecureBankTokenhqdbAJ.transfer.call(addressrfxkI90, uintTWDMwkH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHelbzLM = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintAEVcIct = BigInt("2028")
		const addressrOC2oUe = accounts[1]
		const addressESnaqBd = accounts[5]
		const boolc4EJUK = await CryptoSecureBankTokenHelbzLM.approve.call(addressrOC2oUe, uintAEVcIct, {from: accounts[5]});
		const addressx5gOHb = await CryptoSecureBankTokenHelbzLM.transferOwnership.call(addressESnaqBd, {from: accounts[3]});

		assert.equal(boolc4EJUK, true)
	});
})