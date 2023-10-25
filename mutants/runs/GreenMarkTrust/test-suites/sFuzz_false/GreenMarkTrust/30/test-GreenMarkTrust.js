const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintVIr45Kc = BigInt("1318")
		const stringJAYqb12 = "OALsh8SOsp98B0XWULuQyd6L7SHy4Uub64oraFnOASaH38jDeuAfH0u"
		const stringxk35BMa = "VCEZGXqQcwc3IIGvCFD4xcuG636n5IJG9NFRpws8RxHcK9tf5cvsCEWzb6d"
		const GreenMarkTrusteopZZa1 = await GreenMarkTrust.new(uintVIr45Kc, stringJAYqb12, stringxk35BMa, {from: accounts[4]});
		const bytepL8A6HZ = "0x040b10151815161b02040a1e03190707131b1c0f"
		const uintKVeu8r6 = BigInt("61")
		const addressepLb9o1 = accounts[0]
		const byteUHiNZFI = "0x1c0d161e19131f1d181c1c0e0a110e1a19081904"
		const uintK4EeGtn = BigInt("935")
		const addressrvae1VK = accounts[3]
		const uintL2Oocj1 = BigInt("312")
		const addressHnK2ayd = accounts[4]
		const addressQ6HcSYw = accounts[3]
		const boolJakg6k = await GreenMarkTrusteopZZa1.approveAndCall.call(addressepLb9o1, uintKVeu8r6, bytepL8A6HZ, {from: accounts[1]});
		const boolIV4aktU = await GreenMarkTrusteopZZa1.approveAndCall.call(addressrvae1VK, uintK4EeGtn, byteUHiNZFI, {from: accounts[5]});
		const boolrYoRLO = await GreenMarkTrusteopZZa1.transferFrom.call(addressQ6HcSYw, addressHnK2ayd, uintL2Oocj1, {from: accounts[4]});

		await expect(GreenMarkTrusteopZZa1.approveAndCall.call(addressepLb9o1, uintKVeu8r6, bytepL8A6HZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintrC3cfs = BigInt("1683")
		const string04GlW1 = "l1i74qElmFqX1zVlDFujRIszt8wa5LNVSWocT8T2IlRIT0NzzVupSWHR1FsvViEWoNU0cZtV7y9n5e4S67DG3VX9mEElIVeXIV"
		const strings4ZwEsC = "KtGLwv48OxPWNAJrbwgJOUzuT5BjGFQqxZHRbseY6OrRN4GQ59iKlB7"
		const GreenMarkTrustWYWkuW = await GreenMarkTrust.new(uintrC3cfs, string04GlW1, strings4ZwEsC, {from: accounts[4]});
		const uintg99cEZ = BigInt("817")
		const addressT5poG2 = accounts[3]
		const addressTVh9Jnz = accounts[4]
		const uintCUz9xT9 = BigInt("924")
		const uintuyAKDPz = BigInt("849")
		const addressjEJnV5l = accounts[3]
		const boolN224HI = await GreenMarkTrustWYWkuW.transferFrom.call(addressTVh9Jnz, addressT5poG2, uintg99cEZ, {from: accounts[4]});
		const boolEFzOnLH = await GreenMarkTrustWYWkuW.burn.call(uintCUz9xT9, {from: accounts[2]});
		const boolFCWOTK = await GreenMarkTrustWYWkuW.approve.call(addressjEJnV5l, uintuyAKDPz, {from: accounts[0]});

		await expect(GreenMarkTrustWYWkuW.transferFrom.call(addressTVh9Jnz, addressT5poG2, uintg99cEZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintQ7O8OsL = BigInt("123")
		const stringwFQIPu = "fgRu2v7S68aH8eyz3pVewSgY7vGWOVWQ9vwuLD"
		const strings0tKYsU = "pW4LeKQw8K1"
		const GreenMarkTrustRuZ1JbO = await GreenMarkTrust.new(uintQ7O8OsL, stringwFQIPu, strings0tKYsU, {from: accounts[0]});
		const uintMjD6x3J = BigInt("1942")
		const addressR7Zc5q = accounts[3]
		const bytek5odNn9 = "0x01050b031106"
		const uintleFM7ZY = BigInt("365")
		const addressvvZ89Qh = accounts[2]
		const byteM6yUgyw = "0x130e1014"
		const uintZS612Qq = BigInt("1924")
		const addressdw1tYp8 = accounts[1]
		const byteaH8HVCG = "0x121b1509161814060e1619"
		const uintoqV81OJ = BigInt("704")
		const addressWjDc0OO = accounts[4]
		const uinthV4JYWl = BigInt("792")
		const addressNgtStKD = accounts[3]
		const addressFAcZVud = "0x0000000000000000000000000000000000000001"
		const boolKxsOGJK = await GreenMarkTrustRuZ1JbO.burnFrom.call(addressR7Zc5q, uintMjD6x3J, {from: accounts[3]});
		const boolxln6Okx = await GreenMarkTrustRuZ1JbO.approveAndCall.call(addressvvZ89Qh, uintleFM7ZY, bytek5odNn9, {from: accounts[3]});
		const boold59iPes = await GreenMarkTrustRuZ1JbO.approveAndCall.call(addressdw1tYp8, uintZS612Qq, byteM6yUgyw, {from: accounts[3]});
		const boolJ600LMD = await GreenMarkTrustRuZ1JbO.approveAndCall.call(addressWjDc0OO, uintoqV81OJ, byteaH8HVCG, {from: accounts[1]});
		const boolqSIReha = await GreenMarkTrustRuZ1JbO.transferFrom.call(addressFAcZVud, addressNgtStKD, uinthV4JYWl, {from: accounts[4]});

		await expect(GreenMarkTrustRuZ1JbO.burnFrom.call(addressR7Zc5q, uintMjD6x3J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintXTiQlIf = BigInt("193")
		const stringFKYDnNn = "iEodZMsrY99vhNwiF2eP7ZLsu86cIF4ZTDcyqIg1K9Ss6A9tH"
		const stringrHNSXYK = "PuVBNBZlknhKj0h8MVS9cLiXPZc2QZcfWaR6xGe9DHlC4C0j4Q8iVnBgy9kGvKP1lUxbuX99zlnBcWTrMP"
		const GreenMarkTrustX9FxySu = await GreenMarkTrust.new(uintXTiQlIf, stringFKYDnNn, stringrHNSXYK, {from: accounts[4]});
		const uintJESPm9B = BigInt("568")
		const uintfCwd7Ar = BigInt("915")
		const addressDPcRfjN = accounts[5]
		const addressBw2HHot = accounts[3]
		const boolFr0mp9h = await GreenMarkTrustX9FxySu.burn.call(uintJESPm9B, {from: accounts[4]});
		const booltKq3rn7 = await GreenMarkTrustX9FxySu.transferFrom.call(addressBw2HHot, addressDPcRfjN, uintfCwd7Ar, {from: accounts[2]});

		assert.equal(boolFr0mp9h, true)
		await expect(GreenMarkTrustX9FxySu.transferFrom.call(addressBw2HHot, addressDPcRfjN, uintfCwd7Ar, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintI9X22Ne = BigInt("1380")
		const stringfqgvhto = "VnozPKPa4Nzre9QzTyLjLHfY8VXhrCR"
		const stringjeKSdHw = "DDYppSYXddfPNEtXHmVkaESb8bT43EuvBfwKw84rI7E"
		const GreenMarkTrustbYnxXxR = await GreenMarkTrust.new(uintI9X22Ne, stringfqgvhto, stringjeKSdHw, {from: "0x0000000000000000000000000000000000000001"});
		const uintrPLDr2S = BigInt("266")
		const addressg9NGB0 = accounts[2]
		const uintWWjUlao = BigInt("1157")
		const addresspDqtnhE = accounts[3]
		const uintEBfupyD = BigInt("397")
		const addressF1gzXH = accounts[3]
		const booltRF3bU = await GreenMarkTrustbYnxXxR.transfer.call(addressg9NGB0, uintrPLDr2S, {from: accounts[0]});
		const boolAca5Ip4 = await GreenMarkTrustbYnxXxR.transfer.call(addresspDqtnhE, uintWWjUlao, {from: accounts[0]});
		const boolhRwauwU = await GreenMarkTrustbYnxXxR.approve.call(addressF1gzXH, uintEBfupyD, {from: accounts[3]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintrNTPN94 = BigInt("193")
		const stringFKYDnNn = "iEodZMsrY99vhNwiF2eP7ZLsu86cIF4ZTDcyqIg1K9Ss6A9tH"
		const stringrHNSXYK = "PuVBNBZlknhKj0h8MVS9cLiXPZc2QZcfWaR6xGe9DHlC4C0j4Q8iVnBgy9kGvKP1lUxbuX99zlnBcWTrMP"
		const GreenMarkTrustX9FxySu = await GreenMarkTrust.new(uintrNTPN94, stringFKYDnNn, stringrHNSXYK, {from: accounts[4]});
		const uintJBxURms = BigInt("467")
		const addressjzOA44 = accounts[5]
		const uintjrJIJXx = BigInt("1543")
		const uintP76iiFa = BigInt("915")
		const addressUzi6Gti = accounts[6]
		const addressnn4MpTb = accounts[3]
		const boolarguu6 = await GreenMarkTrustX9FxySu.transfer.call(addressjzOA44, uintJBxURms, {from: accounts[0]});
		const boolOdOaPVj = await GreenMarkTrustX9FxySu.burn.call(uintjrJIJXx, {from: accounts[1]});
		const booltKq3rn7 = await GreenMarkTrustX9FxySu.transferFrom.call(addressnn4MpTb, addressUzi6Gti, uintP76iiFa, {from: accounts[2]});

		await expect(GreenMarkTrustX9FxySu.transfer.call(addressjzOA44, uintJBxURms, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})