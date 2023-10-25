const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ge7iyOL = await GAZ_ERC20.new({from: accounts[3]});
		const uintEzrIijP = BigInt("672")
		const addressCC5MP0 = accounts[0]
		const uintx1PtCO9 = BigInt("41")
		const address9DGNyL = accounts[1]
		const uintUBNzW49 = BigInt("1318")
		const addressJckrdFE = accounts[5]
		const uint9EHywA = BigInt("1945")
		const addressn5XgY1P = accounts[4]
		const uintPvVoid6 = BigInt("1971")
		const addressfvmmSd7 = accounts[0]
		const uintDY6BgJG = BigInt("1120")
		const addresssAB9NGV = "0x0000000000000000000000000000000000000001"
		const booliSDlLC6 = await GAZ_ERC20ge7iyOL.approve.call(addressCC5MP0, uintEzrIijP, {from: accounts[4]});
		const boolb5IVO3n = await GAZ_ERC20ge7iyOL.approve.call(address9DGNyL, uintx1PtCO9, {from: accounts[4]});
		const boolHt6o9hz = await GAZ_ERC20ge7iyOL.approve.call(addressJckrdFE, uintUBNzW49, {from: accounts[5]});
		const boolWT0fu60 = await GAZ_ERC20ge7iyOL.approve.call(addressn5XgY1P, uint9EHywA, {from: accounts[4]});
		const boolYDK9UFr = await GAZ_ERC20ge7iyOL.approve.call(addressfvmmSd7, uintPvVoid6, {from: accounts[0]});
		const boolsd2o6H = await GAZ_ERC20ge7iyOL.approve.call(addresssAB9NGV, uintDY6BgJG, {from: accounts[3]});

		assert.equal(boolHt6o9hz, true)
		assert.equal(boolWT0fu60, true)
		assert.equal(boolYDK9UFr, true)
		assert.equal(boolb5IVO3n, true)
		assert.equal(booliSDlLC6, true)
		assert.equal(boolsd2o6H, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20K5FJLft = await GAZ_ERC20.new({from: accounts[2]});
		const uintQgcg6Wu = BigInt("1107")
		const addressxlNnYco = accounts[3]
		const uintklU7JHN = BigInt("684")
		const addresslUpm1bu = accounts[4]
		const addressTmzGPLQ = accounts[5]
		const uintNopfJcs = BigInt("1736")
		const addressSO75Urs = accounts[4]
		const addresskGIoPJs = accounts[0]
		const boolUwrrF52 = await GAZ_ERC20K5FJLft.approve.call(addressxlNnYco, uintQgcg6Wu, {from: "0x0000000000000000000000000000000000000001"});
		const boolbyZpmuF = await GAZ_ERC20K5FJLft.approve.call(addresslUpm1bu, uintklU7JHN, {from: accounts[2]});
		const boolfHJ1s7q = await GAZ_ERC20K5FJLft.approve.call(addressTmzGPLQ, {from: accounts[5]});
		const booly0WQmov = await GAZ_ERC20K5FJLft.approve.call(addressSO75Urs, uintNopfJcs, {from: accounts[0]});
		const boolqkoTFm1 = await GAZ_ERC20K5FJLft.approve.call(addresskGIoPJs, {from: accounts[3]});

		assert.equal(boolUwrrF52, true)
		assert.equal(boolbyZpmuF, true)
		await expect(GAZ_ERC20K5FJLft.approve.call(addressTmzGPLQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20qrpexH = await GAZ_ERC20.new({from: accounts[0]});
		const uintpJLYleY = BigInt("1346")
		const addressjZdWx7J = accounts[2]
		const uintZXMZ2L = BigInt("840")
		const addressxfvnl2L = accounts[2]
		const addressh6qgIa = accounts[5]
		const uinteL7QhW = BigInt("1563")
		const addressq7Epct1 = accounts[1]
		const addressTaiKohp = accounts[2]
		const boolgvaZHjR = await GAZ_ERC20qrpexH.transfer.call(addressjZdWx7J, uintpJLYleY, {from: accounts[5]});
		const boolqEM751d = await GAZ_ERC20qrpexH.transferFrom.call(addressh6qgIa, addressxfvnl2L, uintZXMZ2L, {from: accounts[0]});
		const boolqeXzkvl = await GAZ_ERC20qrpexH.transferFrom.call(addressTaiKohp, addressq7Epct1, uinteL7QhW, {from: accounts[1]});

		await expect(GAZ_ERC20qrpexH.transfer.call(addressjZdWx7J, uintpJLYleY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20O70u3b5 = await GAZ_ERC20.new({from: accounts[0]});
		const uintpSmcSz7 = BigInt("132")
		const addressjUgtJuA = "0x0000000000000000000000000000000000000001"
		const addressBwbzS35 = accounts[4]
		const uinty1EvKKZ = BigInt("1820")
		const addressgU8fFG = accounts[3]
		const boolIl1gVDD = await GAZ_ERC20O70u3b5.approve.call(addressjUgtJuA, uintpSmcSz7, {from: accounts[1]});
		const boolJcgKv6a = await GAZ_ERC20O70u3b5.approve.call(addressBwbzS35, {from: accounts[4]});
		const boolK2hRvBe = await GAZ_ERC20O70u3b5.transfer.call(addressgU8fFG, uinty1EvKKZ, {from: accounts[3]});

		assert.equal(boolIl1gVDD, true)
		await expect(GAZ_ERC20O70u3b5.approve.call(addressBwbzS35, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20fPAAzQo = await GAZ_ERC20.new({from: accounts[4]});
		const uintYfpSc4U = BigInt("1586")
		const addressnE6rn5g = accounts[5]
		const uintznozuLH = BigInt("1294")
		const addressEDDRNax = accounts[1]
		const uintidNwYv = BigInt("1736")
		const addresseVXY4Bg = accounts[3]
		const addressM4ErrZ8 = accounts[4]
		const uintAETicJq = BigInt("296")
		const addressq88hHhZ = accounts[4]
		const addressH9ln9SK = accounts[2]
		const uintlzIocXq = BigInt("1068")
		const addresspedeRH7 = accounts[1]
		const boolZLdLlqC = await GAZ_ERC20fPAAzQo.approve.call(addressnE6rn5g, uintYfpSc4U, {from: accounts[4]});
		const boolefwwXio = await GAZ_ERC20fPAAzQo.approve.call(addressEDDRNax, uintznozuLH, {from: accounts[2]});
		const boolYFi7SNA = await GAZ_ERC20fPAAzQo.transferFrom.call(addressM4ErrZ8, addresseVXY4Bg, uintidNwYv, {from: accounts[2]});
		const boolwTX1sN4 = await GAZ_ERC20fPAAzQo.transferFrom.call(addressH9ln9SK, addressq88hHhZ, uintAETicJq, {from: accounts[2]});
		const booldJAFzN = await GAZ_ERC20fPAAzQo.approve.call(addresspedeRH7, uintlzIocXq, {from: accounts[3]});

		assert.equal(boolZLdLlqC, true)
		assert.equal(boolefwwXio, true)
		await expect(GAZ_ERC20fPAAzQo.transferFrom.call(addressM4ErrZ8, addresseVXY4Bg, uintidNwYv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20aaHQAXu = await GAZ_ERC20.new({from: accounts[0]});
		const uintp0U0ODj = BigInt("1539")
		const addressW84buam = accounts[0]
		const addressjAOulsM = accounts[1]
		const addressdzIfK10 = accounts[1]
		const uintR0CEYLD = BigInt("35")
		const addresssw4ZBW = accounts[0]
		const boolgukTP14 = await GAZ_ERC20aaHQAXu.approve.call(addressW84buam, uintp0U0ODj, {from: accounts[1]});
		const boolo6gjW89 = await GAZ_ERC20aaHQAXu.approve.call(addressjAOulsM, {from: accounts[0]});
		const boolAAQOeGp = await GAZ_ERC20aaHQAXu.approve.call(addressdzIfK10, {from: "0x0000000000000000000000000000000000000001"});
		const boolSfP11JK = await GAZ_ERC20aaHQAXu.transfer.call(addresssw4ZBW, uintR0CEYLD, {from: accounts[5]});

		assert.equal(boolgukTP14, true)
		await expect(GAZ_ERC20aaHQAXu.approve.call(addressjAOulsM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20GW4bLZ = await GAZ_ERC20.new({from: accounts[1]});
		const uintNZHTMy0 = BigInt("1354")
		const addresslnwJ13T = accounts[3]
		const uintt1qc0pw = BigInt("803")
		const addressw8ttglY = accounts[3]
		const boolPnqZUKL = await GAZ_ERC20GW4bLZ.transfer.call(addresslnwJ13T, uintNZHTMy0, {from: accounts[1]});
		const boolUi79W87 = await GAZ_ERC20GW4bLZ.transfer.call(addressw8ttglY, uintt1qc0pw, {from: accounts[2]});

		assert.equal(boolPnqZUKL, true)
		await expect(GAZ_ERC20GW4bLZ.transfer.call(addressw8ttglY, uintt1qc0pw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20GW4bLZ = await GAZ_ERC20.new({from: accounts[1]});
		const addressISLaJP = accounts[4]
		const uintJCk8ZeO = BigInt("631")
		const addressiivLWzD = accounts[3]
		const boolJKSTwzC = await GAZ_ERC20GW4bLZ.approve.call(addressISLaJP, {from: accounts[1]});
		const boolUi79W87 = await GAZ_ERC20GW4bLZ.transfer.call(addressiivLWzD, uintJCk8ZeO, {from: accounts[2]});

		await expect(GAZ_ERC20GW4bLZ.approve.call(addressISLaJP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20GW4bLZ = await GAZ_ERC20.new({from: accounts[1]});
		const addresspGdqFZl = accounts[3]
		const uintZxsh3Pp = BigInt("204")
		const addresshvMoqNY = accounts[0]
		const uinteex5qqI = BigInt("803")
		const addressCwNsoVv = accounts[4]
		const booldGeXSs7 = await GAZ_ERC20GW4bLZ.approve.call(addresspGdqFZl, {from: "0x0000000000000000000000000000000000000001"});
		const boolvvKpsdG = await GAZ_ERC20GW4bLZ.transfer.call(addresshvMoqNY, uintZxsh3Pp, {from: accounts[1]});
		const boolUi79W87 = await GAZ_ERC20GW4bLZ.transfer.call(addressCwNsoVv, uinteex5qqI, {from: accounts[2]});

		await expect(GAZ_ERC20GW4bLZ.approve.call(addresspGdqFZl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20aSDcmoy = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrciidwR = BigInt("923")
		const addressFDGnexV = accounts[1]
		const uintWLuZgqO = BigInt("1677")
		const addressR9OQmnN = accounts[2]
		const uintBspw9yc = BigInt("1684")
		const addressbNJ9SQ = accounts[4]
		const boolHJ8sIU = await GAZ_ERC20aSDcmoy.transfer.call(addressFDGnexV, uintrciidwR, {from: accounts[4]});
		const boolMgGuynv = await GAZ_ERC20aSDcmoy.approve.call(addressR9OQmnN, uintWLuZgqO, {from: "0x0000000000000000000000000000000000000001"});
		const boolMPbb69m = await GAZ_ERC20aSDcmoy.transfer.call(addressbNJ9SQ, uintBspw9yc, {from: accounts[1]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20GW4bLZ = await GAZ_ERC20.new({from: accounts[1]});
		const addressH5J8rN = accounts[0]
		const uintCYsfQAo = BigInt("804")
		const addresszxlK3wv = accounts[3]
		const boolRgmDss = await GAZ_ERC20GW4bLZ.approve.call(addressH5J8rN, {from: accounts[2]});
		const boolUi79W87 = await GAZ_ERC20GW4bLZ.transfer.call(addresszxlK3wv, uintCYsfQAo, {from: accounts[2]});

		await expect(GAZ_ERC20GW4bLZ.approve.call(addressH5J8rN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20GW4bLZ = await GAZ_ERC20.new({from: accounts[1]});
		const addressWSwMkeT = accounts[1]
		const uintkG6nGEp = BigInt("803")
		const addresscClnLr = accounts[4]
		const boolPV4AUTg = await GAZ_ERC20GW4bLZ.approve.call(addressWSwMkeT, {from: accounts[3]});
		const boolUi79W87 = await GAZ_ERC20GW4bLZ.transfer.call(addresscClnLr, uintkG6nGEp, {from: accounts[2]});

		await expect(GAZ_ERC20GW4bLZ.approve.call(addressWSwMkeT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})