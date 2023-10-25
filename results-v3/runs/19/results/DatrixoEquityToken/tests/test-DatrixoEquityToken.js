const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressrP4GT2 = accounts[1]
		const uintJan4t0g = BigInt("1382")
		const DatrixoEquityTokenQnayrjV = await DatrixoEquityToken.new(addressrP4GT2, uintJan4t0g, {from: accounts[4]});
		const uintZ2nkFmo = BigInt("1694")
		const addresskVYJJlU = accounts[0]
		const addressKWbw1nK = accounts[0]
		const addressy7Cdx79 = accounts[2]
		const uintYX11aJl = BigInt("1847")
		const addressCsDWFBD = accounts[3]
		const boolzeGhKa0 = await DatrixoEquityTokenQnayrjV.transferFrom.call(addressKWbw1nK, addresskVYJJlU, uintZ2nkFmo, {from: accounts[0]});
		await DatrixoEquityTokenQnayrjV.onlyOwner.call({from: accounts[0]});
		const addressarrayt20Nx9m = await DatrixoEquityTokenQnayrjV.getShareholdersArray.call({from: accounts[5]});
		const boolItHSCYe = await DatrixoEquityTokenQnayrjV.removeShareholder.call(addressy7Cdx79, {from: accounts[3]});
		await DatrixoEquityTokenQnayrjV.onlyOwner.call({from: accounts[1]});
		const boolvQBQyea = await DatrixoEquityTokenQnayrjV.transfer.call(addressCsDWFBD, uintYX11aJl, {from: accounts[3]});

		await expect(DatrixoEquityTokenQnayrjV.transferFrom.call(addressKWbw1nK, addresskVYJJlU, uintZ2nkFmo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressXbvOmug = accounts[0]
		const uintPNylT5q = BigInt("265")
		const DatrixoEquityTokenDkDrLMu = await DatrixoEquityToken.new(addressXbvOmug, uintPNylT5q, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenDkDrLMu.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenDkDrLMu.afterStartTime.call({from: accounts[3]});
		const addressarrayILc9TdD = await DatrixoEquityTokenDkDrLMu.getShareholdersArray.call({from: accounts[4]});
		await DatrixoEquityTokenDkDrLMu.onlyOwner.call({from: accounts[2]});
	});

	it('test for DatrixoEquityToken', async () => {
		const address1zySrJ = accounts[4]
		const uintQo62hPs = BigInt("56")
		const DatrixoEquityTokenfEPIJrV = await DatrixoEquityToken.new(address1zySrJ, uintQo62hPs, {from: accounts[3]});
		const uintv8dMWju = BigInt("1106")
		const addressPgUxi4b = accounts[3]
		const uintwSEeIEI = BigInt("378")
		const addresszPEf4So = accounts[3]
		const addressarrayJHK6mkL = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const boolKLG2NBa = await DatrixoEquityTokenfEPIJrV.transfer.call(addressPgUxi4b, uintv8dMWju, {from: accounts[5]});
		const boolsXjAdx7 = await DatrixoEquityTokenfEPIJrV.transfer.call(addresszPEf4So, uintwSEeIEI, {from: accounts[4]});
		const addressarrayGvmlGfH = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: accounts[2]});

		assert.equal(addressarrayJHK6mkL, )
		await expect(DatrixoEquityTokenfEPIJrV.transfer.call(addressPgUxi4b, uintv8dMWju, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqK9mJ0R = accounts[0]
		const uintdpvB9xw = BigInt("1212")
		const DatrixoEquityTokenojcrt6t = await DatrixoEquityToken.new(addressqK9mJ0R, uintdpvB9xw, {from: accounts[3]});
		const uintdDjEob4 = BigInt("1371")
		const addresshgdEC8 = accounts[1]
		const addressD7PDnp6 = "0x0000000000000000000000000000000000000001"
		const uintNnurWyP = BigInt("651")
		await DatrixoEquityTokenojcrt6t.afterStartTime.call({from: accounts[1]});
		const bool8Uw6Hn = await DatrixoEquityTokenojcrt6t.transferFrom.call(addressD7PDnp6, addresshgdEC8, uintdDjEob4, {from: accounts[5]});
		const uintPISgcsf = await DatrixoEquityTokenojcrt6t.setStart.call(uintNnurWyP, {from: accounts[5]});

		await expect(DatrixoEquityTokenojcrt6t.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressYPZJ6m0 = accounts[5]
		const uintG3gHnq8 = BigInt("1479")
		const DatrixoEquityTokenVJS1Jlf = await DatrixoEquityToken.new(addressYPZJ6m0, uintG3gHnq8, {from: accounts[2]});
		const uintWZFMbRt = BigInt("2008")
		const uintCfF2F98 = await DatrixoEquityTokenVJS1Jlf.setStart.call(uintWZFMbRt, {from: accounts[5]});
		await DatrixoEquityTokenVJS1Jlf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenVJS1Jlf.afterStartTime.call({from: accounts[4]});
		const addressarraykWeAzQO = await DatrixoEquityTokenVJS1Jlf.getShareholdersArray.call({from: accounts[2]});

		await expect(DatrixoEquityTokenVJS1Jlf.setStart.call(uintWZFMbRt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressXJQlLPq = accounts[4]
		const uintZMtHSao = BigInt("56")
		const DatrixoEquityTokenfEPIJrV = await DatrixoEquityToken.new(addressXJQlLPq, uintZMtHSao, {from: accounts[3]});
		const uintM5QFi8d = BigInt("1111")
		const address6uXVWK = accounts[3]
		const addressOVuHcyL = accounts[4]
		const uintJiLBHoy = BigInt("1106")
		const addressiwVE7aj = accounts[1]
		const uintnFvfIuU = BigInt("378")
		const addressknEuXmj = accounts[3]
		const uintBuwomI3 = BigInt("595")
		const addresseVP5c2a = accounts[3]
		const addressdMHuAcU = accounts[2]
		const addressarrayJHK6mkL = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const bool60XkJ6 = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addressOVuHcyL, address6uXVWK, uintM5QFi8d, {from: accounts[4]});
		const boolKLG2NBa = await DatrixoEquityTokenfEPIJrV.transfer.call(addressiwVE7aj, uintJiLBHoy, {from: accounts[5]});
		const boolsXjAdx7 = await DatrixoEquityTokenfEPIJrV.transfer.call(addressknEuXmj, uintnFvfIuU, {from: accounts[4]});
		const boolPVVgqUH = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addressdMHuAcU, addresseVP5c2a, uintBuwomI3, {from: accounts[2]});
		await DatrixoEquityTokenfEPIJrV.onlyOwner.call({from: accounts[1]});
		const addressarrayGvmlGfH = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: accounts[2]});

		assert.equal(addressarrayJHK6mkL, )
		assert.equal(bool60XkJ6, true)
		await expect(DatrixoEquityTokenfEPIJrV.transfer.call(addressiwVE7aj, uintJiLBHoy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresseYkZAtU = accounts[4]
		const uintren7JHm = BigInt("56")
		const DatrixoEquityTokenfEPIJrV = await DatrixoEquityToken.new(addresseYkZAtU, uintren7JHm, {from: accounts[3]});
		const uintFW72mZt = BigInt("1111")
		const addressTBYkFiW = accounts[3]
		const addressJ6yQkfI = accounts[4]
		const uintRO7Koca = BigInt("378")
		const addressXRaJ0It = accounts[3]
		const uintZfnLlZW = BigInt("595")
		const addressjcPeld7 = accounts[3]
		const addresshztgDF = accounts[2]
		const uinti9PwA93 = BigInt("1862")
		const addressrpmL5Sj = accounts[2]
		const addressarrayJHK6mkL = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const bool60XkJ6 = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addressJ6yQkfI, addressTBYkFiW, uintFW72mZt, {from: accounts[4]});
		const boolsXjAdx7 = await DatrixoEquityTokenfEPIJrV.transfer.call(addressXRaJ0It, uintRO7Koca, {from: accounts[4]});
		const boolPVVgqUH = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addresshztgDF, addressjcPeld7, uintZfnLlZW, {from: accounts[2]});
		await DatrixoEquityTokenfEPIJrV.afterStartTime.call({from: accounts[4]});
		await DatrixoEquityTokenfEPIJrV.onlyOwner.call({from: accounts[1]});
		const addressarrayGvmlGfH = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: accounts[2]});
		const boolmCYHQdG = await DatrixoEquityTokenfEPIJrV.transfer.call(addressrpmL5Sj, uinti9PwA93, {from: accounts[4]});

		assert.equal(addressarrayJHK6mkL, )
		assert.equal(bool60XkJ6, true)
		assert.equal(boolsXjAdx7, true)
		await expect(DatrixoEquityTokenfEPIJrV.transferFrom.call(addresshztgDF, addressjcPeld7, uintZfnLlZW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbLRWF4e = accounts[4]
		const uinta34lEUc = BigInt("56")
		const DatrixoEquityTokenfEPIJrV = await DatrixoEquityToken.new(addressbLRWF4e, uinta34lEUc, {from: accounts[3]});
		const uintREAPGH = BigInt("1111")
		const addressK2Yzz8S = accounts[3]
		const addressygLS1r = accounts[5]
		const uintmuZBxR = BigInt("1106")
		const addressLG94o2T = accounts[1]
		const uintOGAViBE = BigInt("1233")
		const addressCpx2lIy = accounts[1]
		const addressyUf5h76 = accounts[2]
		const addressMG8drYk = accounts[5]
		const uintg4HYRdQ = BigInt("148")
		const addresshLBE9et = accounts[5]
		const addresssmXbDWR = accounts[2]
		const uintEAQZsQy = BigInt("378")
		const addressqfGzQ9i = accounts[3]
		const uintIMWdAXi = BigInt("425")
		const addressGhYyFZ5 = accounts[4]
		const uintwijnU7T = BigInt("595")
		const addressiwIojZb = accounts[1]
		const addressFwYe84y = accounts[2]
		const addressarrayJHK6mkL = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayRfgw7h = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const bool60XkJ6 = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addressygLS1r, addressK2Yzz8S, uintREAPGH, {from: accounts[4]});
		await DatrixoEquityTokenfEPIJrV.onlyOwner.call({from: accounts[3]});
		await DatrixoEquityTokenfEPIJrV.afterStartTime.call({from: accounts[0]});
		const boolKLG2NBa = await DatrixoEquityTokenfEPIJrV.transfer.call(addressLG94o2T, uintmuZBxR, {from: accounts[5]});
		const addressarrayeuBHbit = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsRX7v6g = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addressyUf5h76, addressCpx2lIy, uintOGAViBE, {from: accounts[4]});
		const addressarrayDqq9WSU = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: accounts[0]});
		const boolYAQwZcc = await DatrixoEquityTokenfEPIJrV.removeShareholder.call(addressMG8drYk, {from: accounts[3]});
		const boolwWw2lB = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addresssmXbDWR, addresshLBE9et, uintg4HYRdQ, {from: accounts[0]});
		const addressarrayBwRLjkB = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: accounts[3]});
		const boolsXjAdx7 = await DatrixoEquityTokenfEPIJrV.transfer.call(addressqfGzQ9i, uintEAQZsQy, {from: accounts[4]});
		const uintKhJMUXn = await DatrixoEquityTokenfEPIJrV.setStart.call(uintIMWdAXi, {from: accounts[2]});
		const boolvXZHHzU = await DatrixoEquityTokenfEPIJrV.removeShareholder.call(addressGhYyFZ5, {from: "0x0000000000000000000000000000000000000001"});
		const boolPVVgqUH = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addressFwYe84y, addressiwIojZb, uintwijnU7T, {from: accounts[2]});
		await DatrixoEquityTokenfEPIJrV.onlyOwner.call({from: accounts[1]});
		const addressarrayGvmlGfH = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: accounts[2]});

		assert.equal(addressarrayJHK6mkL, )
		assert.equal(addressarrayRfgw7h, )
		await expect(DatrixoEquityTokenfEPIJrV.transferFrom.call(addressygLS1r, addressK2Yzz8S, uintREAPGH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresszQcacpM = accounts[1]
		const uintsIjMP3t = BigInt("1609")
		const DatrixoEquityTokenBnL5dbI = await DatrixoEquityToken.new(addresszQcacpM, uintsIjMP3t, {from: accounts[2]});
		const addressVigym3W = accounts[1]
		const boolZGVJLXX = await DatrixoEquityTokenBnL5dbI.removeShareholder.call(addressVigym3W, {from: accounts[1]});
		await DatrixoEquityTokenBnL5dbI.onlyOwner.call({from: accounts[5]});

		await expect(DatrixoEquityTokenBnL5dbI.removeShareholder.call(addressVigym3W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspHFs1cj = accounts[4]
		const uintZIUcm1i = BigInt("56")
		const DatrixoEquityTokenfEPIJrV = await DatrixoEquityToken.new(addresspHFs1cj, uintZIUcm1i, {from: accounts[3]});
		const uintSISFn6g = BigInt("1111")
		const addressUnyYDXq = accounts[3]
		const addressQcdqetb = accounts[4]
		const uintFShIYu3 = BigInt("378")
		const addressNmfJZC6 = accounts[4]
		const addressarrayJHK6mkL = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const bool60XkJ6 = await DatrixoEquityTokenfEPIJrV.transferFrom.call(addressQcdqetb, addressUnyYDXq, uintSISFn6g, {from: accounts[4]});
		const boolsXjAdx7 = await DatrixoEquityTokenfEPIJrV.transfer.call(addressNmfJZC6, uintFShIYu3, {from: accounts[4]});
		await DatrixoEquityTokenfEPIJrV.afterStartTime.call({from: accounts[1]});
		await DatrixoEquityTokenfEPIJrV.onlyOwner.call({from: accounts[1]});
		const addressarrayGvmlGfH = await DatrixoEquityTokenfEPIJrV.getShareholdersArray.call({from: accounts[2]});

		assert.equal(addressarrayJHK6mkL, )
		assert.equal(bool60XkJ6, true)
		await expect(DatrixoEquityTokenfEPIJrV.transfer.call(addressNmfJZC6, uintFShIYu3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})