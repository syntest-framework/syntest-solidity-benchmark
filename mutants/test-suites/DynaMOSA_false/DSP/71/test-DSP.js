const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringORuJOZi = "QeTH23YUC6d4JwueHUQuGxeHnXdbx8IfC4CXblhglwTqYLB"
		const stringHJck86m = "RjRVgAnnyWY8NVnu7bSEUssY8ytaNfCy2vfdc8MnfGmwpBUvxfuWUY"
		const uintEaKCyWJ = BigInt("159")
		const DSPq3jh33R = await DSP.new(stringORuJOZi, stringHJck86m, uintEaKCyWJ, {from: accounts[2]});
		const addressviVhnBa = accounts[4]
		const uintu81f5n = BigInt("1499")
		const addressph57m0M = "0x0000000000000000000000000000000000000001"
		const uintUsPLnCY = BigInt("927")
		const uintqtqWN4z = BigInt("1293")
		const addressw6ystpC = accounts[5]
		const addresswZUY93G = accounts[2]
		const uint256Gz98hi0 = await DSPq3jh33R.balanceOf.call(addressviVhnBa, {from: accounts[5]});
		const booldXtbMlp = await DSPq3jh33R.increaseAllowance.call(addressph57m0M, uintu81f5n, {from: accounts[3]});
		const booluzsnAgS = await DSPq3jh33R.lock.call(addressw6ystpC, uintqtqWN4z, uintUsPLnCY, {from: accounts[4]});
		const booliB7aHAK = await DSPq3jh33R.freezeAccount.call(addresswZUY93G, {from: accounts[1]});
		const boolNiHKMaO = await DSPq3jh33R.paused.call({from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addresslwZcFvd = accounts[4]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addresslwZcFvd, {from: accounts[4]});
		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});

		assert.equal(boolEx1bgDe, true)
		assert.equal(uint8ahTkCvc, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPFYzLGle = await DSP.new({from: accounts[1]});
		const addressXNMaW2V = accounts[4]
		const uinteZB3WZ = BigInt("909")
		const addressk0MsyX7 = accounts[1]
		const addressxb6ZYiU = accounts[2]
		const addressWOcgcyK = "0x0000000000000000000000000000000000000001"
		const uintjvyd84E = BigInt("1796")
		const address4bqT7a = accounts[3]
//		const boolR5GAq7F = await DSPFYzLGle.freezeAccount.call(addressXNMaW2V, {from: accounts[3]});
//		const uint256JgDU156 = await DSPFYzLGle.totalSupply.call({from: accounts[1]});
//		const boolTvp7dMw = await DSPFYzLGle.transferFrom.call(addressxb6ZYiU, addressk0MsyX7, uinteZB3WZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256usuTXU0 = await DSPFYzLGle.balanceOf.call(addressWOcgcyK, {from: accounts[4]});
//		const boolMsJh3qb = await DSPFYzLGle.unlock.call(address4bqT7a, uintjvyd84E, {from: accounts[1]});

		await expect(DSPFYzLGle.freezeAccount.call(addressXNMaW2V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPa7OjHvw = await DSP.new({from: accounts[0]});
		const uintMbNE78C = BigInt("1904")
		const addresswylADlT = accounts[4]
		const addresszziV8Ks = accounts[1]
		const addressdMf1F8 = accounts[3]
		const addressgWt6leA = accounts[1]
//		const boolNpIyvRS = await DSPa7OjHvw.decreaseAllowance.call(addresswylADlT, uintMbNE78C, {from: accounts[4]});
//		const uint256FWzyhWk = await DSPa7OjHvw.balanceOf.call(addresszziV8Ks, {from: accounts[2]});
//		const addressSm33zDr = await DSPa7OjHvw.removePauser.call(addressdMf1F8, {from: accounts[5]});
//		const booluomb2uG = await DSPa7OjHvw.isPauser.call(addressgWt6leA, {from: accounts[0]});

		await expect(DSPa7OjHvw.decreaseAllowance.call(addresswylADlT, uintMbNE78C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressJ1FQIFU = accounts[2]
//		await DSPKcqgppU.renouncePauser.call({from: accounts[4]});
//		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});
//		const addresszhcWyMc = await DSPKcqgppU.notFrozen.call(addressJ1FQIFU, {from: accounts[3]});

		await expect(DSPKcqgppU.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressJJvzNpt = accounts[4]
		const addressciUu0wH = accounts[4]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addressJJvzNpt, {from: accounts[4]});
		const uint256l6oqFl0 = await DSPKcqgppU.balanceOf.call(addressciUu0wH, {from: accounts[2]});
		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});

		assert.equal(boolEx1bgDe, true)
		assert.equal(uint256l6oqFl0, BigInt("100000000000000000000000000000"))
		assert.equal(uint8ahTkCvc, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressM2eEHrA = accounts[4]
		const uinttS2X2LY = BigInt("616")
		const addressTpdD1ZE = accounts[2]
		const uintUptZWJ0 = BigInt("1104")
		const address6TzJLP = accounts[1]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addressM2eEHrA, {from: accounts[4]});
		const boolfbvFUjR = await DSPKcqgppU.mint.call(addressTpdD1ZE, uinttS2X2LY, {from: accounts[4]});
		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});
//		const boolruxHKjc = await DSPKcqgppU.transfer.call(address6TzJLP, uintUptZWJ0, {from: accounts[5]});
//		const stringOo3rdNi = await DSPKcqgppU.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEx1bgDe, true)
		assert.equal(boolfbvFUjR, true)
		assert.equal(uint8ahTkCvc, BigInt("18"))
		await expect(DSPKcqgppU.transfer.call(address6TzJLP, uintUptZWJ0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPelhRO3p = await DSP.new({from: accounts[5]});
		const addressX0lCzZw = accounts[1]
		const uint256zE28D9O = await DSPelhRO3p.totalSupply.call({from: accounts[4]});
		const booltYmq3KQ = await DSPelhRO3p.isOwner.call(addressX0lCzZw, {from: accounts[1]});
//		await DSPelhRO3p.renouncePauser.call({from: accounts[1]});

		assert.equal(booltYmq3KQ, false)
		assert.equal(uint256zE28D9O, BigInt("100000000000000000000000000000"))
		await expect(DSPelhRO3p.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPAAbv10G = await DSP.new({from: accounts[4]});
		const uintHtjbepd = BigInt("1660")
		const addressglk9C6Y = "0x0000000000000000000000000000000000000001"
		const addressTOfMMyo = accounts[3]
		const addressPOLjZqM = accounts[4]
		const addressZgSCY4p = accounts[5]
//		const booltexJkZP = await DSPAAbv10G.transferFrom.call(addressTOfMMyo, addressglk9C6Y, uintHtjbepd, {from: accounts[3]});
//		const boolj31th93 = await DSPAAbv10G.unfreezeAccount.call(addressPOLjZqM, {from: accounts[4]});
//		const bool4sRfA6 = await DSPAAbv10G.isOwner.call(addressZgSCY4p, {from: accounts[4]});

		await expect(DSPAAbv10G.transferFrom.call(addressTOfMMyo, addressglk9C6Y, uintHtjbepd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressMTf2huC = accounts[4]
		const uintJxpjPi6 = BigInt("547")
		const addressZeWhU5d = accounts[2]
		const uintKzQUyek = BigInt("616")
		const addresslXz9Nkr = accounts[2]
		const uintMrpGe0 = BigInt("1084")
		const addresspSUbiwl = accounts[1]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addressMTf2huC, {from: accounts[4]});
//		const boolkGhgVbw = await DSPKcqgppU.burnFrombyOwner.call(addressZeWhU5d, uintJxpjPi6, {from: accounts[4]});
//		const boolfbvFUjR = await DSPKcqgppU.mint.call(addresslXz9Nkr, uintKzQUyek, {from: accounts[4]});
//		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});
//		await DSPKcqgppU.onlyNewOwner.call({from: accounts[0]});
//		const boolruxHKjc = await DSPKcqgppU.transfer.call(addresspSUbiwl, uintMrpGe0, {from: accounts[5]});
//		const stringOo3rdNi = await DSPKcqgppU.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEx1bgDe, true)
		await expect(DSPKcqgppU.burnFrombyOwner.call(addressZeWhU5d, uintJxpjPi6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addresssIM9Z64 = accounts[4]
		const addresscU146tm = accounts[4]
		const uintpIatL99 = BigInt("1865")
		const uintuAI9Oo = BigInt("84")
		const addresslYaw9Z9 = accounts[3]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addresssIM9Z64, {from: accounts[4]});
		const uint256l6oqFl0 = await DSPKcqgppU.balanceOf.call(addresscU146tm, {from: accounts[2]});
		const boolM1TYRZz = await DSPKcqgppU.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const bool9WUPes = await DSPKcqgppU.lock.call(addresslYaw9Z9, uintuAI9Oo, uintpIatL99, {from: accounts[1]});
//		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});

		assert.equal(boolEx1bgDe, true)
		assert.equal(boolM1TYRZz, false)
		assert.equal(uint256l6oqFl0, BigInt("100000000000000000000000000000"))
		await expect(DSPKcqgppU.lock.call(addresslYaw9Z9, uintuAI9Oo, uintpIatL99, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPAAbv10G = await DSP.new({from: accounts[4]});
		const addressSiLb7o = accounts[5]
		const uintLIGzIJA = BigInt("385")
		const addressNarkCXI = accounts[3]
		const addressgsQSfq = accounts[5]
//		const boolj31th93 = await DSPAAbv10G.unfreezeAccount.call(addressSiLb7o, {from: accounts[4]});
//		const boolGkttwfz = await DSPAAbv10G.transfer.call(addressNarkCXI, uintLIGzIJA, {from: accounts[3]});
//		const stringmlbdfhh = await DSPAAbv10G.name.call({from: accounts[4]});
//		const bool4sRfA6 = await DSPAAbv10G.isOwner.call(addressgsQSfq, {from: accounts[4]});

		await expect(DSPAAbv10G.unfreezeAccount.call(addressSiLb7o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressgJ61GCP = accounts[4]
		const uintW0dimZ3 = BigInt("616")
		const addresslR1G29w = accounts[2]
		const uintB7mnMgV = BigInt("432")
		const uintTKVp6XE = BigInt("742")
		const addressXpC2ine = accounts[4]
		const uintppiUsRB = BigInt("1104")
		const addressYTKspC = accounts[1]
		const uinthN3jlsy = BigInt("1237")
		const addressVUmcWCC = accounts[0]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addressgJ61GCP, {from: accounts[4]});
		const boolfbvFUjR = await DSPKcqgppU.mint.call(addresslR1G29w, uintW0dimZ3, {from: accounts[4]});
		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});
		const stringqyNJKYf = await DSPKcqgppU.name.call({from: accounts[4]});
		const boolkkFd5f = await DSPKcqgppU.transferWithLock.call(addressXpC2ine, uintTKVp6XE, uintB7mnMgV, {from: accounts[4]});
//		const boolruxHKjc = await DSPKcqgppU.transfer.call(addressYTKspC, uintppiUsRB, {from: accounts[5]});
//		const stringOo3rdNi = await DSPKcqgppU.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolPV0PAwI = await DSPKcqgppU.decreaseAllowance.call(addressVUmcWCC, uinthN3jlsy, {from: accounts[0]});

		assert.equal(boolEx1bgDe, true)
		assert.equal(boolfbvFUjR, true)
		assert.equal(boolkkFd5f, true)
		assert.equal(stringqyNJKYf, "DSP")
		assert.equal(uint8ahTkCvc, BigInt("18"))
		await expect(DSPKcqgppU.transfer.call(addressYTKspC, uintppiUsRB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressk9B2c7o = accounts[4]
		const addressh0Py3xb = accounts[5]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addressk9B2c7o, {from: accounts[4]});
		const uint256l6oqFl0 = await DSPKcqgppU.balanceOf.call(addressh0Py3xb, {from: accounts[2]});
		const stringq7OMzcQ = await DSPKcqgppU.symbol.call({from: accounts[5]});
		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});

		assert.equal(boolEx1bgDe, true)
		assert.equal(stringq7OMzcQ, "DSP")
		assert.equal(uint256l6oqFl0, BigInt("0"))
		assert.equal(uint8ahTkCvc, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressh8AnnHp = accounts[4]
		const addressQEOOTY9 = accounts[4]
		const uintgS2O3Wq = BigInt("920")
		const addressDoNK21y = accounts[0]
		const uintuxjrFIF = BigInt("1867")
		const uintFfoPt72 = BigInt("84")
		const addressOtr7zCn = accounts[3]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addressh8AnnHp, {from: accounts[4]});
		const uint256l6oqFl0 = await DSPKcqgppU.balanceOf.call(addressQEOOTY9, {from: accounts[2]});
		const boolevAjtXJ = await DSPKcqgppU.increaseAllowance.call(addressDoNK21y, uintgS2O3Wq, {from: accounts[4]});
		const boolM1TYRZz = await DSPKcqgppU.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const bool9WUPes = await DSPKcqgppU.lock.call(addressOtr7zCn, uintFfoPt72, uintuxjrFIF, {from: accounts[1]});
//		await DSPKcqgppU.onlyPauser.call({from: accounts[0]});
//		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});

		assert.equal(boolEx1bgDe, true)
		assert.equal(boolM1TYRZz, false)
		assert.equal(boolevAjtXJ, true)
		assert.equal(uint256l6oqFl0, BigInt("100000000000000000000000000000"))
		await expect(DSPKcqgppU.lock.call(addressOtr7zCn, uintFfoPt72, uintuxjrFIF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressheBQWGj = accounts[2]
		const uintY1PguSe = BigInt("212")
		const addressysUP4z5 = accounts[4]
		const address6D5cLt = accounts[3]
		const addressE2yBtE8 = await DSPKcqgppU.transferOwnership.call(addressheBQWGj, {from: accounts[4]});
		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});
//		const bool3AmOgK = await DSPKcqgppU.mint.call(addressysUP4z5, uintY1PguSe, {from: accounts[0]});
//		const addressy8hgIh = await DSPKcqgppU.notFrozen.call(address6D5cLt, {from: accounts[0]});

		assert.equal(uint8ahTkCvc, BigInt("18"))
		await expect(DSPKcqgppU.mint.call(addressysUP4z5, uintY1PguSe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPAAbv10G = await DSP.new({from: accounts[4]});
		const uintBI4JVlv = BigInt("1955")
		const addressnDnPzqr = accounts[2]
		const uint54MTXR = BigInt("1655")
		const address6H3g1v = "0x0000000000000000000000000000000000000002"
		const addressf1cHFdh = accounts[3]
		const boolziENURa = await DSPAAbv10G.approve.call(addressnDnPzqr, uintBI4JVlv, {from: accounts[1]});
//		const booltexJkZP = await DSPAAbv10G.transferFrom.call(addressf1cHFdh, address6H3g1v, uint54MTXR, {from: accounts[3]});

		assert.equal(boolziENURa, true)
		await expect(DSPAAbv10G.transferFrom.call(addressf1cHFdh, address6H3g1v, uint54MTXR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPsxDf8AP = await DSP.new({from: accounts[4]});
		const addressDJjWy7v = accounts[1]
		const uint4frd37 = BigInt("314")
		const addresscM5qLXo = accounts[5]
		const boolQ62Q7O2 = await DSPsxDf8AP.paused.call({from: accounts[0]});
//		const addressMJ105bK = await DSPsxDf8AP.removePauser.call(addressDJjWy7v, {from: accounts[4]});
//		const boolA6ZX51W = await DSPsxDf8AP.transfer.call(addresscM5qLXo, uint4frd37, {from: accounts[4]});

		assert.equal(boolQ62Q7O2, false)
		await expect(DSPsxDf8AP.removePauser.call(addressDJjWy7v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKcqgppU = await DSP.new({from: accounts[4]});
		const addressJ97GuNw = accounts[4]
		const addressnhnwDDy = accounts[4]
		const addressXeNX0IG = accounts[1]
		const addressf6IrZcR = accounts[1]
		const uintN8ZJaie = BigInt("2042")
		const addressNNxphfL = accounts[5]
		const addressa6QOuU9 = accounts[5]
		const addressG2nMaF5 = "0x0000000000000000000000000000000000000001"
		const addressbIGdHy9 = accounts[5]
		const boolEx1bgDe = await DSPKcqgppU.isOwner.call(addressJ97GuNw, {from: accounts[4]});
		const uint256l6oqFl0 = await DSPKcqgppU.balanceOf.call(addressnhnwDDy, {from: accounts[2]});
		const uint256kdz28eu = await DSPKcqgppU.allowance.call(addressf6IrZcR, addressXeNX0IG, {from: accounts[1]});
		const boolM1TYRZz = await DSPKcqgppU.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boollwr26p3 = await DSPKcqgppU.transferFrom.call(addressa6QOuU9, addressNNxphfL, uintN8ZJaie, {from: accounts[0]});
//		const addressz5NPxZp = await DSPKcqgppU.addPauser.call(addressG2nMaF5, {from: accounts[0]});
//		const uint8ahTkCvc = await DSPKcqgppU.decimals.call({from: accounts[3]});
//		const booliphqTFX = await DSPKcqgppU.isPauser.call(addressbIGdHy9, {from: accounts[3]});

		assert.equal(boolEx1bgDe, true)
		assert.equal(boolM1TYRZz, false)
		assert.equal(uint256kdz28eu, BigInt("0"))
		assert.equal(uint256l6oqFl0, BigInt("100000000000000000000000000000"))
		await expect(DSPKcqgppU.transferFrom.call(addressa6QOuU9, addressNNxphfL, uintN8ZJaie, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPUxAJbd = await DSP.new({from: accounts[3]});
		const addressALoyvwM = accounts[3]
		const addressT2oXd25 = await DSPUxAJbd.upgradeTo.call(addressALoyvwM, {from: accounts[3]});
//		await DSPUxAJbd.whenPaused.call({from: accounts[4]});

		await expect(DSPUxAJbd.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPAAbv10G = await DSP.new({from: accounts[4]});
		const addresselxmXlQ = accounts[0]
		const uintST47ooV = BigInt("1660")
		const addressWHEPFxh = "0x0000000000000000000000000000000000000002"
		const addressKLsnSK = accounts[3]
//		await DSPAAbv10G.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256OEDMcn = await DSPAAbv10G.balanceOf.call(addresselxmXlQ, {from: accounts[3]});
//		const booltexJkZP = await DSPAAbv10G.transferFrom.call(addressKLsnSK, addressWHEPFxh, uintST47ooV, {from: accounts[3]});

		await expect(DSPAAbv10G.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPpZOwmg3 = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfZ3HFS = accounts[2]
		await DSPpZOwmg3.whenNotPaused.call({from: accounts[5]});
		const addressmGJtuvC = await DSPpZOwmg3.upgradeTo.call(addressfZ3HFS, {from: "0x0000000000000000000000000000000000000001"});
		await DSPpZOwmg3.unpause.call({from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPuMyGNUZ = await DSP.new({from: accounts[0]});
		const addresstImuWp = accounts[0]
		const addressvDcSHp = accounts[1]
		const uintCt3hNok = BigInt("1189")
		const addressxMnXBMr = "0x0000000000000000000000000000000000000001"
		const boolP8svQ8x = await DSPuMyGNUZ.freezeAccount.call(addresstImuWp, {from: accounts[0]});
//		const addressRTMX1t = await DSPuMyGNUZ.notFrozen.call(addressvDcSHp, {from: accounts[3]});
//		const boolIX35Koz = await DSPuMyGNUZ.increaseAllowance.call(addressxMnXBMr, uintCt3hNok, {from: accounts[5]});

		assert.equal(boolP8svQ8x, true)
		await expect(DSPuMyGNUZ.notFrozen.call(addressvDcSHp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPsxDf8AP = await DSP.new({from: accounts[4]});
		const uintayskvv = BigInt("182")
		const addressHlZFgWs = accounts[3]
		const uintuf6pEy2 = BigInt("1837")
		const addressgPPePN = accounts[1]
		const addresshWSmtMG = accounts[2]
		const uintzk0V1d = BigInt("144")
		const addressRRH8Nb = "0x0000000000000000000000000000000000000002"
		const addressViw4Lak = accounts[4]
		const uinthJtsF9l = BigInt("483")
		const addressmejPuGY = accounts[0]
		const addressGVI6S66 = accounts[0]
		const boolPz6LTaz = await DSPsxDf8AP.transfer.call(addressHlZFgWs, uintayskvv, {from: accounts[4]});
//		const boolRDN4VGI = await DSPsxDf8AP.unlock.call(addressgPPePN, uintuf6pEy2, {from: accounts[4]});
//		const addressSe6hROG = await DSPsxDf8AP.removePauser.call(addresshWSmtMG, {from: accounts[0]});
//		const boolivXPFMS = await DSPsxDf8AP.transferFrom.call(addressViw4Lak, addressRRH8Nb, uintzk0V1d, {from: accounts[5]});
//		await DSPsxDf8AP.renouncePauser.call({from: accounts[3]});
//		const booljrXaUUY = await DSPsxDf8AP.decreaseAllowance.call(addressmejPuGY, uinthJtsF9l, {from: accounts[1]});
//		const boolqMUT5Vf = await DSPsxDf8AP.freezeAccount.call(addressGVI6S66, {from: accounts[4]});

		assert.equal(boolPz6LTaz, true)
		await expect(DSPsxDf8AP.unlock.call(addressgPPePN, uintuf6pEy2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPsxDf8AP = await DSP.new({from: accounts[4]});
		const addressPUkfkP0 = "0x0000000000000000000000000000000000000001"
		const addressO5TmWft = accounts[1]
		const uintBFnimqq = BigInt("226")
		const addressVTLZXzP = accounts[5]
		const addressFNqHHVB = await DSPsxDf8AP.addPauser.call(addressPUkfkP0, {from: accounts[4]});
//		const address6luNfh = await DSPsxDf8AP.removePauser.call(addressO5TmWft, {from: accounts[3]});
//		const boolbbGcjVt = await DSPsxDf8AP.transfer.call(addressVTLZXzP, uintBFnimqq, {from: accounts[1]});
//		await DSPsxDf8AP.onlyNewOwner.call({from: accounts[0]});

		await expect(DSPsxDf8AP.removePauser.call(addressO5TmWft, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})