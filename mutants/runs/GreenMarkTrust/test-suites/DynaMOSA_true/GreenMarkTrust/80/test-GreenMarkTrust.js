const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintJVwqaM = BigInt("1594")
		const stringv81dbcF = "RKtuA8Xl"
		const stringTarAiaX = "otyfwV1Lh5O2eiT5Pd8SGIBhiM7KHSReIvrASSRLFbdFTgGX6b4nohXvKLNt8QBMOf2E4ezxCllmeMThOvtOKsGu"
		const GreenMarkTrustTQim6Bf = await GreenMarkTrust.new(uintJVwqaM, stringv81dbcF, stringTarAiaX, {from: accounts[4]});
		const byteS6JeYli = "0x1e130605161305190817021501021710091700060502"
		const uintDOGbzRN = BigInt("1921")
		const addressAe5AxJv = accounts[3]
		const uintmgLrlb = BigInt("1426")
		const addressLI6ob3G = accounts[1]
		const uintPsjPXei = BigInt("747")
		const boolAQgv0W = await GreenMarkTrustTQim6Bf.approveAndCall.call(addressAe5AxJv, uintDOGbzRN, byteS6JeYli, {from: accounts[0]});
		const boolsUoB6lZ = await GreenMarkTrustTQim6Bf.approve.call(addressLI6ob3G, uintmgLrlb, {from: accounts[1]});
		const boolPI3fdgl = await GreenMarkTrustTQim6Bf.burn.call(uintPsjPXei, {from: accounts[2]});

		await expect(GreenMarkTrustTQim6Bf.approveAndCall.call(addressAe5AxJv, uintDOGbzRN, byteS6JeYli, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintOcQIszf = BigInt("1727")
		const stringKG5PH6J = "fVZInfagbWGavEKwazVFuIYz6mY4iC6j"
		const stringPYpAXUQ = "wE0"
		const GreenMarkTrustCS18fI5 = await GreenMarkTrust.new(uintOcQIszf, stringKG5PH6J, stringPYpAXUQ, {from: accounts[2]});
		const uintMBwLX1V = BigInt("181")
		const addressMj1Cf5K = accounts[2]
		const uintRW8Osmo = BigInt("1369")
		const addressVgYrBmR = accounts[5]
		const booll64d2gO = await GreenMarkTrustCS18fI5.burnFrom.call(addressMj1Cf5K, uintMBwLX1V, {from: accounts[1]});
		const boolKqSYoNR = await GreenMarkTrustCS18fI5.transfer.call(addressVgYrBmR, uintRW8Osmo, {from: accounts[0]});

		await expect(GreenMarkTrustCS18fI5.burnFrom.call(addressMj1Cf5K, uintMBwLX1V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintDpWQRd = BigInt("811")
		const stringW32YEEk = "jYsIBXXQSrEfDOgflnrwMY8HeXJDCG214rqBXCQlRIsveJsQBvhfwGJXTHVU7c"
		const stringdu7AH7A = "Z2tQlQ2fvKktQH4PACC7IUktWfiBmrQ35JUxFOnbizzvyEPfaXNLObl1RuHbSrvDkq1Bh14McnM7g9HuYUmw4z"
		const GreenMarkTrustTr7mRs = await GreenMarkTrust.new(uintDpWQRd, stringW32YEEk, stringdu7AH7A, {from: accounts[3]});
		const uintNvnw2xL = BigInt("691")
		const addressdnewtzO = accounts[0]
		const addresswkqz1S = accounts[2]
		const uintPkz7crG = BigInt("1425")
		const addresst4dyaU = accounts[1]
		const uintnpoSdJ = BigInt("172")
		const addressvZWELMk = "0x0000000000000000000000000000000000000001"
		const byteLbGvOq = "0x11081f090b"
		const uinti22Pu0 = BigInt("1178")
		const addresskHeHIy5 = accounts[2]
		const boolQfzUyny = await GreenMarkTrustTr7mRs.transferFrom.call(addresswkqz1S, addressdnewtzO, uintNvnw2xL, {from: accounts[1]});
		const boolM5GTXKM = await GreenMarkTrustTr7mRs.approve.call(addresst4dyaU, uintPkz7crG, {from: accounts[1]});
		const boolYYX6so6 = await GreenMarkTrustTr7mRs.transfer.call(addressvZWELMk, uintnpoSdJ, {from: accounts[0]});
		const boolYVucQCN = await GreenMarkTrustTr7mRs.approveAndCall.call(addresskHeHIy5, uinti22Pu0, byteLbGvOq, {from: accounts[4]});

		await expect(GreenMarkTrustTr7mRs.transferFrom.call(addresswkqz1S, addressdnewtzO, uintNvnw2xL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintW0wJi0s = BigInt("977")
		const stringhqGgscn = "KmW"
		const stringevNrg8g = "vD3DCSOUDNZxVySY2DQorlfXDbYq2sycCVHEOajrukHC1"
		const GreenMarkTrustZ5D88cJ = await GreenMarkTrust.new(uintW0wJi0s, stringhqGgscn, stringevNrg8g, {from: accounts[1]});
		const uintyXMzFdj = BigInt("233")
		const addressrGivHeA = accounts[3]
		const uintuIsTBcK = BigInt("402")
		const addressWxO3WxL = accounts[2]
		const addressx7fReqb = accounts[3]
		const uintZiGPFn = BigInt("1852")
		const uinta5IIThs = BigInt("992")
		const addressTHLL0lW = accounts[0]
		const uintsCadgBp = BigInt("709")
		const boolLgtkD6I = await GreenMarkTrustZ5D88cJ.transfer.call(addressrGivHeA, uintyXMzFdj, {from: accounts[3]});
		const boolIvUYInB = await GreenMarkTrustZ5D88cJ.transferFrom.call(addressx7fReqb, addressWxO3WxL, uintuIsTBcK, {from: accounts[1]});
		const boolR2ipk1K = await GreenMarkTrustZ5D88cJ.burn.call(uintZiGPFn, {from: "0x0000000000000000000000000000000000000001"});
		const boolM7VChhw = await GreenMarkTrustZ5D88cJ.approve.call(addressTHLL0lW, uinta5IIThs, {from: accounts[3]});
		const boolZMGUubx = await GreenMarkTrustZ5D88cJ.burn.call(uintsCadgBp, {from: accounts[0]});

		await expect(GreenMarkTrustZ5D88cJ.transfer.call(addressrGivHeA, uintyXMzFdj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintJxbmFW = BigInt("1332")
		const stringjpKov64 = "8nXcxHBSLf2UD82WwTX6w9RpzN5HeUrvLk9W9YLtur1bpEFk5MBlNLreCbb3VudANeMfUWUkS8"
		const stringsgsWbXt = "IHMudEFXdilEfhA70WynSb3fE6WKkUa84aUqYWcVOn2jYXYdLeYID9LKOlm2aLRbO6KmMjtk9Bh52Uf04ti3ZMWhw29Px27XI"
		const GreenMarkTrustTVijg5u = await GreenMarkTrust.new(uintJxbmFW, stringjpKov64, stringsgsWbXt, {from: accounts[0]});
		const uintuKE3jQ7 = BigInt("549")
		const addressTASFsy3 = accounts[3]
		const uintvkclkNW = BigInt("1963")
		const uintA828C6 = BigInt("1028")
		const addressREHOtjH = "0x0000000000000000000000000000000000000001"
		const boolq7UZ5nW = await GreenMarkTrustTVijg5u.approve.call(addressTASFsy3, uintuKE3jQ7, {from: accounts[5]});
		const boollEFJTEZ = await GreenMarkTrustTVijg5u.burn.call(uintvkclkNW, {from: accounts[2]});
		const boolU0Wlko = await GreenMarkTrustTVijg5u.approve.call(addressREHOtjH, uintA828C6, {from: accounts[4]});

		assert.equal(boolq7UZ5nW, true)
		await expect(GreenMarkTrustTVijg5u.burn.call(uintvkclkNW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintNUThiN = BigInt("776")
		const stringnETd653 = "lgqrDTcSaeggTluzYtBofQoXtPZoL7r7rGQtm74qV4v0VHR9uSYu1Z5jr9huS6C"
		const stringBvkJTJS = "DxEGFL1IkH"
		const GreenMarkTrustngOKoVY = await GreenMarkTrust.new(uintNUThiN, stringnETd653, stringBvkJTJS, {from: accounts[3]});
		const uintxCRLthA = BigInt("1681")
		const byteEJAZJhW = "0x061c0c1d0c060a160617161a030e010c0311"
		const uintJcqv8RP = BigInt("1537")
		const addressIR4tPhI = accounts[2]
		const byteQynJ79 = "0x190d1d1c091f0201051113071a15050b0b1a"
		const uintqzcqmOb = BigInt("944")
		const addressznmDJX = accounts[0]
		const uintwSPrrx4 = BigInt("451")
		const boolpitzC7c = await GreenMarkTrustngOKoVY.burn.call(uintxCRLthA, {from: accounts[3]});
		const boolWx6w9Ma = await GreenMarkTrustngOKoVY.approveAndCall.call(addressIR4tPhI, uintJcqv8RP, byteEJAZJhW, {from: accounts[3]});
		const boolHjHo80X = await GreenMarkTrustngOKoVY.approveAndCall.call(addressznmDJX, uintqzcqmOb, byteQynJ79, {from: accounts[2]});
		const booli6CVc0k = await GreenMarkTrustngOKoVY.burn.call(uintwSPrrx4, {from: accounts[1]});

		assert.equal(boolpitzC7c, true)
		await expect(GreenMarkTrustngOKoVY.approveAndCall.call(addressIR4tPhI, uintJcqv8RP, byteEJAZJhW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintcAmsjHu = BigInt("1224")
		const stringV8rQghl = "zhFN6pvN5lpJSh9oSVtj159aa9hwyTnyTIv0UKfDvqM4975URp3VfKtE7RhNlJN3EdFiaDAaoVlErc3GPHHeDccOm"
		const stringp8LbFY = "vyGOmRDQd3DobrZza2J3HA3DqgQ9jbf4CN"
		const GreenMarkTrustbJ62aJ = await GreenMarkTrust.new(uintcAmsjHu, stringV8rQghl, stringp8LbFY, {from: accounts[3]});
		const uintA7IUfrF = BigInt("1592")
		const addressDuloYxx = accounts[0]
		const uintnySNUZE = BigInt("354")
		const uintjZM26Kn = BigInt("1693")
		const addressl7FFzTW = accounts[2]
		const addressLondDT9 = accounts[3]
		const boolVyBuHKK = await GreenMarkTrustbJ62aJ.transfer.call(addressDuloYxx, uintA7IUfrF, {from: accounts[3]});
		const booldmnKePT = await GreenMarkTrustbJ62aJ.burn.call(uintnySNUZE, {from: accounts[0]});
		const boolcab1GcP = await GreenMarkTrustbJ62aJ.transferFrom.call(addressLondDT9, addressl7FFzTW, uintjZM26Kn, {from: accounts[2]});

		assert.equal(boolVyBuHKK, true)
		await expect(GreenMarkTrustbJ62aJ.burn.call(uintnySNUZE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintOf84MU8 = BigInt("13")
		const stringYZcgVO = "DmkiAhLvpBY9Wh2gWhGcxo08jJspQUCGG63z8piXiR4YgDkknLxDB8Lx7J"
		const stringQS62ll = "8YYwUklmxozIcagVcfJXNHYTwlPN6Rs"
		const GreenMarkTrustnbQy6jq = await GreenMarkTrust.new(uintOf84MU8, stringYZcgVO, stringQS62ll, {from: "0x0000000000000000000000000000000000000001"});
		const uintXkvwhLo = BigInt("443")
		const addresshLDsRw = accounts[3]
		const addressztkW8uP = accounts[3]
		const uintFa4Ft3B = BigInt("598")
		const addresskN7dydr = accounts[2]
		const addressjqoobw = accounts[2]
		const uintCmyc8tX = BigInt("891")
		const addressN46po2Q = accounts[0]
		const addresslAjgXn7 = accounts[4]
		const uintHi4TrSO = BigInt("100")
		const boolOC3pnfr = await GreenMarkTrustnbQy6jq.transferFrom.call(addressztkW8uP, addresshLDsRw, uintXkvwhLo, {from: accounts[3]});
		const booln4qz36i = await GreenMarkTrustnbQy6jq.transferFrom.call(addressjqoobw, addresskN7dydr, uintFa4Ft3B, {from: accounts[3]});
		const boolYoxpAoq = await GreenMarkTrustnbQy6jq.transferFrom.call(addresslAjgXn7, addressN46po2Q, uintCmyc8tX, {from: accounts[2]});
		const boolffg001s = await GreenMarkTrustnbQy6jq.burn.call(uintHi4TrSO, {from: accounts[1]});
	});
})