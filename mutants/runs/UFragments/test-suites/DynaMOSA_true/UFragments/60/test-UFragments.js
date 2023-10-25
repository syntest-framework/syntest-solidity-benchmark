const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsAU9lyxV = await UFragments.new({from: accounts[3]});
		const addresstiZvTwO = accounts[1]
		const addressxVvRhi6 = "0x0000000000000000000000000000000000000001"
		const addressPj7Xxoo = accounts[3]
		const stringR8z3NT = await UFragmentsAU9lyxV.symbol.call({from: accounts[2]});
		const addressdKjeUIV = await UFragmentsAU9lyxV.initialize.call(addresstiZvTwO, {from: accounts[4]});
		const uint256cujh2Py = await UFragmentsAU9lyxV.allowance.call(addressPj7Xxoo, addressxVvRhi6, {from: accounts[1]});

		assert.equal(stringR8z3NT, "")
		await expect(UFragmentsAU9lyxV.initialize.call(addresstiZvTwO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsazgETpl = await UFragments.new({from: accounts[4]});
		const uintbx2jpRW = BigInt("436")
		const addresslMhWnog = accounts[5]
		const uintOHgI17P = BigInt("1019")
		const addressjd37ljG = accounts[4]
		const intacyb9y = BigInt("333")
		const intHXDSHoQ = BigInt("1997")
		await UFragmentsazgETpl.renounceOwnership.call({from: accounts[2]});
		const boolSCKxozt = await UFragmentsazgETpl.approve.call(addresslMhWnog, uintbx2jpRW, {from: accounts[2]});
		const bool25zKR0 = await UFragmentsazgETpl.approve.call(addressjd37ljG, uintOHgI17P, {from: accounts[0]});
		const int256mtgaU9 = await UFragmentsazgETpl.mul.call(intHXDSHoQ, intacyb9y, {from: accounts[3]});

		await expect(UFragmentsazgETpl.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQAwMvC8 = await UFragments.new({from: accounts[2]});
		const int3TRYth = BigInt("652")
		const intLNXeIa = BigInt("60")
		const intsHa68j6 = BigInt("1186")
		const addressfCzfoIK = accounts[3]
		const int256U0cmPSL = await UFragmentsQAwMvC8.abs.call(int3TRYth, {from: accounts[2]});
		const int256vlNxjbv = await UFragmentsQAwMvC8.sub.call(intsHa68j6, intLNXeIa, {from: accounts[5]});
		const addresseZPx7zl = await UFragmentsQAwMvC8.initialize.call(addressfCzfoIK, {from: accounts[0]});

		await expect(UFragmentsQAwMvC8.abs.call(int3TRYth, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentshDHxyK = await UFragments.new({from: accounts[4]});
		const addressmo1NJ28 = "0x0000000000000000000000000000000000000001"
		const addressbxNDuQx = accounts[1]
		const addresscW9Fu1z = accounts[2]
		const uint256T1b1d2 = await UFragmentshDHxyK.calRebase.call({from: accounts[5]});
		const uint256IBQkaE = await UFragmentshDHxyK.allowance.call(addressbxNDuQx, addressmo1NJ28, {from: accounts[4]});
		const addressyAGaTxs = await UFragmentshDHxyK.transferOwnership.call(addresscW9Fu1z, {from: accounts[4]});

		await expect(UFragmentshDHxyK.calRebase.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJMWp21v = await UFragments.new({from: accounts[2]});
		const intjpuPW9m = BigInt("702")
		const intVB8Tfqm = BigInt("-1516")
		const intqvy5dob = BigInt("1356")
		const intfi813LD = BigInt("506")
		const uinthVenA2z = BigInt("203")
		const stringcbh4OMt = "9ifvVBkDGTGBg0xxaoF4zGUYB81xuqEra6pT7CbTUDxviSoKlrJUyX"
		const stringAXEkmle = "Kjgf8MWvVEyFscYavkmaPS7oS4BcPV0b4Gajdm2XXyIY4hqk7WFfpDLDRmdtKS1lQ9nBd5u0Rmj2uX5JDlwOmHds6JWSiBHK1"
		const stringmPblYjk = await UFragmentsJMWp21v.name.call({from: accounts[3]});
		const uint8NkMfGXP = await UFragmentsJMWp21v.decimals.call({from: accounts[3]});
		const int256RkzJ3q6 = await UFragmentsJMWp21v.div.call(intVB8Tfqm, intjpuPW9m, {from: accounts[4]});
		const int2562vRJbt = await UFragmentsJMWp21v.add.call(intfi813LD, intqvy5dob, {from: accounts[5]});
		const stringzruCSFO = await UFragmentsJMWp21v.initialize.call(stringAXEkmle, stringcbh4OMt, uinthVenA2z, {from: accounts[1]});

		assert.equal(stringmPblYjk, "")
		assert.equal(uint8NkMfGXP, BigInt("0"))
		await expect(UFragmentsJMWp21v.div.call(intVB8Tfqm, intjpuPW9m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsPH7I7tk = await UFragments.new({from: accounts[1]});
		const uintxSRsDRx = BigInt("2038")
		const addressHnGqwkB = accounts[2]
		const uinty6dKvs = BigInt("999")
		const addressjUmS723 = "0x0000000000000000000000000000000000000001"
		const addressoZ2mavd = accounts[2]
		const uintNb3qFvq = BigInt("108")
		const stringe3efMRc = "K7MfXJgQqaWQV1TC8IAlYognXcpoKH41Ul897ltdo1WATwWGEWTe3o7AtAKcBIlHIyeOpgG5I5o0"
		const stringn9WZtoA = "zTjYNGbHoee6yPijLruJfaXWFYwNWUHaD5soFztSOi4NWeryVVzPUFvxgl73ZEcSBDidbKxXi"
		const addressBQjLOYs = accounts[2]
		const addressgDIu8Y = accounts[5]
		const addressI8FnFsH = accounts[0]
		const addressV5GkRO = accounts[4]
		const boolDfyEf4 = await UFragmentsPH7I7tk.approve.call(addressHnGqwkB, uintxSRsDRx, {from: accounts[3]});
		const boolYgXWBUM = await UFragmentsPH7I7tk.transfer.call(addressjUmS723, uinty6dKvs, {from: accounts[3]});
		const addresslQ2kht = await UFragmentsPH7I7tk.initialize.call(addressoZ2mavd, {from: accounts[1]});
		const stringdXGroAI = await UFragmentsPH7I7tk.initialize.call(stringn9WZtoA, stringe3efMRc, uintNb3qFvq, {from: accounts[3]});
		const uint256rxuRL5S = await UFragmentsPH7I7tk.allowance.call(addressgDIu8Y, addressBQjLOYs, {from: accounts[5]});
		const uint256mbgfgdw = await UFragmentsPH7I7tk.allowance.call(addressV5GkRO, addressI8FnFsH, {from: accounts[4]});

		assert.equal(boolDfyEf4, true)
		await expect(UFragmentsPH7I7tk.transfer.call(addressjUmS723, uinty6dKvs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsPH7I7tk = await UFragments.new({from: accounts[1]});
		const addressMzZTQ4t = accounts[5]
		const addressGNaApQB = accounts[0]
		const uintdHj0xJ8 = BigInt("2038")
		const addressFtyrxMO = accounts[3]
		const uintFRUe38c = BigInt("999")
		const addresssiq36Sl = "0x0000000000000000000000000000000000000001"
		const addressiNrdPGi = accounts[0]
		const addressXoPVepi = accounts[2]
		const uintMle5QrP = BigInt("108")
		const stringe3efMRc = "K7MfXJgQqaWQV1TC8IAlYognXcpoKH41Ul897ltdo1WATwWGEWTe3o7AtAKcBIlHIyeOpgG5I5o0"
		const stringn9WZtoA = "zTjYNGbHoee6yPijLruJfaXWFYwNWUHaD5soFztSOi4NWeryVVzPUFvxgl73ZEcSBDidbKxXi"
		const addressCpEszFK = accounts[2]
		const addresso7igeNn = accounts[5]
		const addressabIxpBy = accounts[0]
		const addresstpCQkhI = accounts[4]
		const uint256tLcCsyg = await UFragmentsPH7I7tk.allowance.call(addressGNaApQB, addressMzZTQ4t, {from: accounts[0]});
		const boolDfyEf4 = await UFragmentsPH7I7tk.approve.call(addressFtyrxMO, uintdHj0xJ8, {from: accounts[3]});
		const boolYgXWBUM = await UFragmentsPH7I7tk.transfer.call(addresssiq36Sl, uintFRUe38c, {from: accounts[3]});
		const addressaO1NZQ = await UFragmentsPH7I7tk.transferOwnership.call(addressiNrdPGi, {from: "0x0000000000000000000000000000000000000001"});
		const addresslQ2kht = await UFragmentsPH7I7tk.initialize.call(addressXoPVepi, {from: accounts[1]});
		const stringdXGroAI = await UFragmentsPH7I7tk.initialize.call(stringn9WZtoA, stringe3efMRc, uintMle5QrP, {from: accounts[3]});
		const uint256rxuRL5S = await UFragmentsPH7I7tk.allowance.call(addresso7igeNn, addressCpEszFK, {from: accounts[5]});
		const uint256mbgfgdw = await UFragmentsPH7I7tk.allowance.call(addresstpCQkhI, addressabIxpBy, {from: accounts[4]});

		assert.equal(boolDfyEf4, true)
		assert.equal(uint256tLcCsyg, BigInt("0"))
		await expect(UFragmentsPH7I7tk.transfer.call(addresssiq36Sl, uintFRUe38c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsPH7I7tk = await UFragments.new({from: accounts[1]});
		const uintjF2SDUF = BigInt("2038")
		const addressqkFg1E7 = accounts[2]
		const uintphQRXcy = BigInt("999")
		const addressc8InceM = "0x0000000000000000000000000000000000000000"
		const addresso4HA5Xk = accounts[2]
		const addressMBXBUp = accounts[0]
		const addressnPuGYg5 = accounts[4]
		const boolDfyEf4 = await UFragmentsPH7I7tk.approve.call(addressqkFg1E7, uintjF2SDUF, {from: accounts[3]});
		const boolQI9m0Ot = await UFragmentsPH7I7tk.rebaseTimeInfo.call({from: accounts[2]});
		const boolYgXWBUM = await UFragmentsPH7I7tk.transfer.call(addressc8InceM, uintphQRXcy, {from: accounts[3]});
		const addresslQ2kht = await UFragmentsPH7I7tk.initialize.call(addresso4HA5Xk, {from: accounts[1]});
		const stringRy1VIj5 = await UFragmentsPH7I7tk.name.call({from: accounts[3]});
		const uint256mbgfgdw = await UFragmentsPH7I7tk.allowance.call(addressnPuGYg5, addressMBXBUp, {from: accounts[4]});

		assert.equal(boolDfyEf4, true)
		await expect(UFragmentsPH7I7tk.transfer.call(addressc8InceM, uintphQRXcy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsJeYDwp2 = await UFragments.new({from: accounts[2]});
		const stringB2miHmn = await UFragmentsJeYDwp2.name.call({from: accounts[3]});
		const addressDCeY8vT = await UFragmentsJeYDwp2.owner.call({from: accounts[1]});
		const uint256lq2wbOr = await UFragmentsJeYDwp2.calRebase.call({from: accounts[4]});

		assert.equal(addressDCeY8vT, 0x0000000000000000000000000000000000000000)
		assert.equal(stringB2miHmn, "")
		await expect(UFragmentsJeYDwp2.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsiM6XmNV = await UFragments.new({from: accounts[4]});
		const uintqD9c1oc = BigInt("246")
		const stringoVNBn7G = "eYTq8BO2Gv9UkEECMmLcC37s4g8Gspiu2RnCLTS4tkxC"
		const stringivOXEjx = "BRvlWDEOdXcvLz3AHwgI"
		const uintmkH3Q8J = BigInt("1002")
		const addressYz6fDmY = accounts[2]
		const addressRqmwj1l = accounts[3]
		const addressiaExeGd = accounts[4]
		const stringLmkksfF = await UFragmentsiM6XmNV.initialize.call(stringivOXEjx, stringoVNBn7G, uintqD9c1oc, {from: accounts[2]});
		const boolAXUUz7s = await UFragmentsiM6XmNV.transferFrom.call(addressRqmwj1l, addressYz6fDmY, uintmkH3Q8J, {from: accounts[4]});
		const stringXxKfq9a = await UFragmentsiM6XmNV.name.call({from: accounts[2]});
		const uint256w01reBB = await UFragmentsiM6XmNV.balanceOf.call(addressiaExeGd, {from: accounts[2]});

		await expect(UFragmentsiM6XmNV.transferFrom.call(addressRqmwj1l, addressYz6fDmY, uintmkH3Q8J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentshDHxyK = await UFragments.new({from: accounts[4]});
		const uintEM40Yv = BigInt("1776")
		const addresslNCHtfs = accounts[1]
		const addressnfCilMd = accounts[2]
		const uint256MZVv6cl = await UFragmentshDHxyK.totalSupply.call({from: accounts[1]});
		const boolwLeVoFK = await UFragmentshDHxyK.transfer.call(addresslNCHtfs, uintEM40Yv, {from: accounts[2]});
		const addressyAGaTxs = await UFragmentshDHxyK.transferOwnership.call(addressnfCilMd, {from: accounts[4]});

		assert.equal(uint256MZVv6cl, BigInt("0"))
		await expect(UFragmentshDHxyK.transfer.call(addresslNCHtfs, uintEM40Yv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsYcQ9TgR = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intmifXUL = BigInt("6")
		const intrts1wMr = BigInt("985")
		const int256Hxn2jhk = await UFragmentsYcQ9TgR.mul.call(intrts1wMr, intmifXUL, {from: accounts[5]});
		const uint256FT8TJjg = await UFragmentsYcQ9TgR.totalSupply.call({from: accounts[1]});
		const boolMhIfZlt = await UFragmentsYcQ9TgR.isOwner.call({from: accounts[2]});
	});

	it('test for UFragments', async () => {
		const UFragmentsPH7I7tk = await UFragments.new({from: accounts[1]});
		const uintWWsCmL2 = BigInt("999")
		const addressnRVUyao = "0x00000000000000000000000000000000000000-1"
		const addressMtcEm87 = accounts[2]
		const addressBK9PcZ5 = accounts[0]
		const uintTPZsh31 = BigInt("541")
		const addressGpZ9zkf = accounts[2]
		const addresst37FY9h = accounts[0]
		const boolYgXWBUM = await UFragmentsPH7I7tk.transfer.call(addressnRVUyao, uintWWsCmL2, {from: accounts[3]});
		await UFragmentsPH7I7tk.onlyOwner.call({from: accounts[5]});
		const addressp1jTMKr = await UFragmentsPH7I7tk.transferOwnership.call(addressMtcEm87, {from: accounts[4]});
		const addressVy658Fs = await UFragmentsPH7I7tk.transferOwnership.call(addressBK9PcZ5, {from: accounts[0]});
		await UFragmentsPH7I7tk.onlyOwner.call({from: accounts[1]});
		const boolxFZQq5e = await UFragmentsPH7I7tk.transferFrom.call(addresst37FY9h, addressGpZ9zkf, uintTPZsh31, {from: accounts[2]});

		await expect(UFragmentsPH7I7tk.transfer.call(addressnRVUyao, uintWWsCmL2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})