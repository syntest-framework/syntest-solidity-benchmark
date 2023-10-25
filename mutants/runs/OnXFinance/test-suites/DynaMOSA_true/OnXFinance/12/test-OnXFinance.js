const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringaUJZPmW = "wWS965w6CG8QVubB1YK"
		const stringlW3H4jF = "TZzfzGaF0Sj0Nu8cCEnR46EawRK7"
		const uintGOank7r = BigInt("1322")
		const OnXFinanceSqg3iJE = await OnXFinance.new(stringaUJZPmW, stringlW3H4jF, uintGOank7r, {from: accounts[3]});
		const addressWtLeYec = "0x0000000000000000000000000000000000000001"
		const uintYhvzc06 = BigInt("580")
		const addressDjHwftP = accounts[3]
		const uintqWkXqMn = BigInt("860")
		const addressrIsroU = accounts[0]
		const addressT0vfME = accounts[2]
		const boolecFB3od = await OnXFinanceSqg3iJE.transferownership.call(addressWtLeYec, {from: accounts[1]});
		const boolDvk4vjf = await OnXFinanceSqg3iJE.approve.call(addressDjHwftP, uintYhvzc06, {from: "0x0000000000000000000000000000000000000001"});
		const uint8yxHa8ri = await OnXFinanceSqg3iJE.decimals.call({from: accounts[5]});
		const stringhqERTHK = await OnXFinanceSqg3iJE.symbol.call({from: accounts[4]});
		const boolJ9rnNbS = await OnXFinanceSqg3iJE.transferFrom.call(addressT0vfME, addressrIsroU, uintqWkXqMn, {from: accounts[4]});
		const stringxNEoZOc = await OnXFinanceSqg3iJE.symbol.call({from: accounts[4]});

		await expect(OnXFinanceSqg3iJE.transferownership.call(addressWtLeYec, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringsng0vQS = "GzqaWxRsTmSKDdzd9jr7E8bzzWSiXU6ltFwQCXFzyWKGEsRmkxSHIiMl9vYIXGVwRVmLJkEHepREWI2kvBPW9yEGtcKx3"
		const stringHsbqckW = "9LKNagcLsQP285D6Fb9F5L7rtFE4VTYFJ6EzjoKoriRaMWKTmjwRvTUWwFXy3MuD3LjpuIa"
		const uintxFtRdnr = BigInt("1316")
		const OnXFinanceNyciPj = await OnXFinance.new(stringsng0vQS, stringHsbqckW, uintxFtRdnr, {from: "0x0000000000000000000000000000000000000001"});
		const uintVKFzyuC = BigInt("1112")
		const addressCrcVIEr = accounts[5]
		const addressQmo7EHs = accounts[4]
		const uintY5om1vA = await OnXFinanceNyciPj.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolE8pqGcq = await OnXFinanceNyciPj.approveAndCall.call(addressCrcVIEr, uintVKFzyuC, {from: accounts[0]});
		const uintVt3074B = await OnXFinanceNyciPj.balanceOf.call(addressQmo7EHs, {from: accounts[2]});
		const uintQcijPzT = await OnXFinanceNyciPj.totalSupply.call({from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const stringWa6y92 = "b1nEKAz3uDhanmHXAJBtrLBjBSFipFdo6jYDV8OOTpMpMiBJDux9Q5LsaUJWOEXsGoFTwWDihVioL9uId9t9EsGb4Vjx6"
		const stringM90FOfr = "QzYgww5NvpzI1MfNTfsfWWowoQne4nVx5k9AskMOiqXAuDhN6v9mKaW2sUssPWMuDGJA4Du2B2QcQ6nGaQjHe7OVCuqCS4Fu3"
		const uintjUI9NqC = BigInt("509")
		const OnXFinanceYbsFkHa = await OnXFinance.new(stringWa6y92, stringM90FOfr, uintjUI9NqC, {from: accounts[2]});
		const uinttxvSqyE = BigInt("785")
		const addressm0p5XAE = accounts[0]
		const addressQrP3w6k = accounts[3]
		const uintK3h3cOo = BigInt("1319")
		const addressFMBNHK = accounts[2]
		const boolIx2Cgl2 = await OnXFinanceYbsFkHa.transferFrom.call(addressQrP3w6k, addressm0p5XAE, uinttxvSqyE, {from: accounts[2]});
		const boolPS6mEK8 = await OnXFinanceYbsFkHa.approve.call(addressFMBNHK, uintK3h3cOo, {from: accounts[4]});

		await expect(OnXFinanceYbsFkHa.transferFrom.call(addressQrP3w6k, addressm0p5XAE, uinttxvSqyE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringY0Tm8Vt = "TNgsqYB7Lb9bzQVwBdbLX"
		const stringurkN0ow = "5B4mbvXErhMfhQn7MoZJYozFfRSt9CW"
		const uintILBBarp = BigInt("189")
		const OnXFinanceNUx6oC4 = await OnXFinance.new(stringY0Tm8Vt, stringurkN0ow, uintILBBarp, {from: accounts[2]});
		const uinthmdHabv = BigInt("453")
		const addresswG3Zkgu = accounts[3]
		const stringQ07U172 = await OnXFinanceNUx6oC4.name.call({from: accounts[3]});
		const boolRJ9zqxP = await OnXFinanceNUx6oC4.transfer.call(addresswG3Zkgu, uinthmdHabv, {from: accounts[5]});
		const uinte2OLrPF = await OnXFinanceNUx6oC4.totalSupply.call({from: accounts[4]});

		assert.equal(stringQ07U172, "TNgsqYB7Lb9bzQVwBdbLX")
		await expect(OnXFinanceNUx6oC4.transfer.call(addresswG3Zkgu, uinthmdHabv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringNOLVVN8 = "htQYq7p"
		const stringyZfykxS = "dxfjM5oGeyXdtxXYPygKSWVs3hDEqLQDCkCoeX96iVKYIWdQqNeU70FnoQ8gV0FeUlE"
		const uintab9PfHt = BigInt("1874")
		const OnXFinancejqCIZrq = await OnXFinance.new(stringNOLVVN8, stringyZfykxS, uintab9PfHt, {from: accounts[3]});
		const uintbAqMs4B = BigInt("1765")
		const addressHJXCexa = accounts[4]
		const uintZ7a0qAc = BigInt("1488")
		const addressBv3zM74 = accounts[4]
		const addressxuubqC = accounts[4]
		const addressyz81P52 = accounts[3]
		const boolLWyaWMA = await OnXFinancejqCIZrq.approve.call(addressHJXCexa, uintbAqMs4B, {from: accounts[2]});
		const boolU9JaAY = await OnXFinancejqCIZrq.transferFrom.call(addressxuubqC, addressBv3zM74, uintZ7a0qAc, {from: accounts[0]});
		const uintQo4Rh0k = await OnXFinancejqCIZrq.balanceOf.call(addressyz81P52, {from: accounts[3]});
		const stringM8tSVUa = await OnXFinancejqCIZrq.name.call({from: accounts[2]});

		assert.equal(boolLWyaWMA, true)
		await expect(OnXFinancejqCIZrq.transferFrom.call(addressxuubqC, addressBv3zM74, uintZ7a0qAc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringaUJZPmW = "wWS965w6CG8QVubB1YK"
		const stringlW3H4jF = "TZzfzGaF0Sj0Nu8cCEnR46EawRK7"
		const uintmX8T5NW = BigInt("1322")
		const OnXFinanceSqg3iJE = await OnXFinance.new(stringaUJZPmW, stringlW3H4jF, uintmX8T5NW, {from: accounts[3]});
		const uintLxAEei = BigInt("580")
		const addressaKPuxno = accounts[3]
		const uintjWvXIKA = BigInt("1280")
		const addressOr7p2GU = accounts[0]
		const uintchHTjEb = BigInt("860")
		const addressJpqHWRc = accounts[0]
		const addressjhqypBL = accounts[2]
		const boolDvk4vjf = await OnXFinanceSqg3iJE.approve.call(addressaKPuxno, uintLxAEei, {from: "0x0000000000000000000000000000000000000001"});
		const uint8yxHa8ri = await OnXFinanceSqg3iJE.decimals.call({from: accounts[5]});
		const stringhqERTHK = await OnXFinanceSqg3iJE.symbol.call({from: accounts[4]});
		const boolCxKLDQF = await OnXFinanceSqg3iJE.increaseAllowance.call(addressOr7p2GU, uintjWvXIKA, {from: accounts[4]});
		const boolJ9rnNbS = await OnXFinanceSqg3iJE.transferFrom.call(addressjhqypBL, addressJpqHWRc, uintchHTjEb, {from: accounts[4]});
		const stringxNEoZOc = await OnXFinanceSqg3iJE.symbol.call({from: accounts[4]});

		assert.equal(boolDvk4vjf, true)
		assert.equal(stringhqERTHK, "TZzfzGaF0Sj0Nu8cCEnR46EawRK7")
		assert.equal(uint8yxHa8ri, BigInt("18"))
		await expect(OnXFinanceSqg3iJE.increaseAllowance.call(addressOr7p2GU, uintjWvXIKA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringaUJZPmW = "wWS965w6CG8QVubB1YK"
		const stringlW3H4jF = "TZzfzGaF0Sj0Nu8cCEnR46EawRK7"
		const uinte4tiV1T = BigInt("1322")
		const OnXFinanceSqg3iJE = await OnXFinance.new(stringaUJZPmW, stringlW3H4jF, uinte4tiV1T, {from: accounts[3]});
		const uintiyfcFHs = BigInt("292")
		const address2CIgwn = accounts[4]
		const addresssp0GnU = "0x0000000000000000000000000000000000000000"
		const uintfXxX9AN = BigInt("580")
		const addressuVp98vk = accounts[3]
		const boolyv4SJCi = await OnXFinanceSqg3iJE.approveAndCall.call(address2CIgwn, uintiyfcFHs, {from: accounts[1]});
		const boolecFB3od = await OnXFinanceSqg3iJE.transferownership.call(addresssp0GnU, {from: accounts[1]});
		const boolDvk4vjf = await OnXFinanceSqg3iJE.approve.call(addressuVp98vk, uintfXxX9AN, {from: "0x0000000000000000000000000000000000000001"});
		const stringhqERTHK = await OnXFinanceSqg3iJE.symbol.call({from: accounts[4]});
		const stringxNEoZOc = await OnXFinanceSqg3iJE.symbol.call({from: accounts[4]});

		await expect(OnXFinanceSqg3iJE.approveAndCall.call(address2CIgwn, uintiyfcFHs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringWa6y92 = "b1nEKAz3uDhanmHXAJBtrLBjBSFipFdo6jYDV8OOTpMpMiBJDux9Q5LsaUJWOEXsGoFTwWDihVioL9uId9t9EsGb4Vjx6"
		const stringM90FOfr = "QzYgww5NvpzI1MfNTfsfWWowoQne4nVx5k9AskMOiqXAuDhN6v9mKaW2sUssPWMuDGJA4Du2B2QcQ6nGaQjHe7OVCuqCS4Fu3"
		const uintOzsaKya = BigInt("509")
		const OnXFinanceYbsFkHa = await OnXFinance.new(stringWa6y92, stringM90FOfr, uintOzsaKya, {from: accounts[2]});
		const uintfOh8RN3 = BigInt("573")
		const addressloNOxc8 = accounts[2]
		const uintPgqVJVB = BigInt("785")
		const addressxiInudh = accounts[0]
		const addressgT8XX91 = accounts[3]
		const boolTyGZxf6 = await OnXFinanceYbsFkHa.transfer.call(addressloNOxc8, uintfOh8RN3, {from: "0x0000000000000000000000000000000000000001"});
		const boolIx2Cgl2 = await OnXFinanceYbsFkHa.transferFrom.call(addressgT8XX91, addressxiInudh, uintPgqVJVB, {from: accounts[2]});

		await expect(OnXFinanceYbsFkHa.transfer.call(addressloNOxc8, uintfOh8RN3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringaUJZPmW = "wWS965w6CG8QVubB1YK"
		const stringlW3H4jF = "TZzfzGaF0Sj0Nu8cCEnR46EawRK7"
		const uintZTQ7Ud = BigInt("1322")
		const OnXFinanceSqg3iJE = await OnXFinance.new(stringaUJZPmW, stringlW3H4jF, uintZTQ7Ud, {from: accounts[3]});
		const addressykmhO89 = "0x00000000000000000000000000000000000000-1"
		const uintbvcYl5X = BigInt("1505")
		const address6UWWBI = accounts[3]
		const uintVa6f9h = BigInt("282")
		const addressA8nGJTF = accounts[3]
		const addressrTVk80c = accounts[4]
		const addressd4dgrCu = accounts[4]
		const uintGLV7w0 = BigInt("834")
		const addressRvOrxc = accounts[2]
		const boolecFB3od = await OnXFinanceSqg3iJE.transferownership.call(addressykmhO89, {from: accounts[1]});
		const boolDvk4vjf = await OnXFinanceSqg3iJE.approve.call(address6UWWBI, uintbvcYl5X, {from: "0x0000000000000000000000000000000000000001"});
		const stringhqERTHK = await OnXFinanceSqg3iJE.symbol.call({from: accounts[4]});
		const boolReyCcah = await OnXFinanceSqg3iJE.transfer.call(addressA8nGJTF, uintVa6f9h, {from: accounts[2]});
		const boolLPM0VJb = await OnXFinanceSqg3iJE.transferownership.call(addressrTVk80c, {from: accounts[4]});
		const uint1a8fsc = await OnXFinanceSqg3iJE.balanceOf.call(addressd4dgrCu, {from: accounts[0]});
		const boolUJ1Zb44 = await OnXFinanceSqg3iJE.transfer.call(addressRvOrxc, uintGLV7w0, {from: accounts[0]});
		const stringxNEoZOc = await OnXFinanceSqg3iJE.symbol.call({from: accounts[4]});

		await expect(OnXFinanceSqg3iJE.transferownership.call(addressykmhO89, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringY0Tm8Vt = "TNgsqYB7Lb9bzQVwBdbLX"
		const stringurkN0ow = "5B4mbvXErhMfhQn7MoZJYozFfRSt9CW"
		const uintkKZTies = BigInt("189")
		const OnXFinanceNUx6oC4 = await OnXFinance.new(stringY0Tm8Vt, stringurkN0ow, uintkKZTies, {from: accounts[2]});
		const uintjAe6GXE = BigInt("1283")
		const addresseUH9Buf = accounts[4]
		const uinta9MU9GW = BigInt("1027")
		const address4wndVu = accounts[1]
		const uintuUDUSl = BigInt("1736")
		const addressmLEQgEJ = accounts[4]
		const boolkWsFlVi = await OnXFinanceNUx6oC4.approveAndCall.call(addresseUH9Buf, uintjAe6GXE, {from: accounts[2]});
		const boolOP7LmIu = await OnXFinanceNUx6oC4.transfer.call(address4wndVu, uinta9MU9GW, {from: accounts[5]});
		const uintFR8Eyoq = await OnXFinanceNUx6oC4.totalSupply.call({from: accounts[3]});
		const boolRJ9zqxP = await OnXFinanceNUx6oC4.transfer.call(addressmLEQgEJ, uintuUDUSl, {from: accounts[5]});

		assert.equal(boolkWsFlVi, true)
		await expect(OnXFinanceNUx6oC4.transfer.call(address4wndVu, uinta9MU9GW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringt9Ny7Kp = "silQNGQLMK1zZzEazpq9nVN"
		const stringTtkk7if = "DGZG2"
		const uinttNSkFLw = BigInt("220")
		const OnXFinanceou9b4C = await OnXFinance.new(stringt9Ny7Kp, stringTtkk7if, uinttNSkFLw, {from: accounts[4]});
		const addressDh1gvN5 = "0x0000000000000000000000000000000000000001"
		const stringovdKykK = await OnXFinanceou9b4C.symbol.call({from: accounts[0]});
		const bool2vSX5j = await OnXFinanceou9b4C.transferownership.call(addressDh1gvN5, {from: accounts[4]});
		const stringO5yGNc = await OnXFinanceou9b4C.symbol.call({from: accounts[2]});

		assert.equal(bool2vSX5j, true)
		assert.equal(stringO5yGNc, "DGZG2")
		assert.equal(stringovdKykK, "DGZG2")
	});

	it('test for OnXFinance', async () => {
		const stringWa6y92 = "b1nEKAz3uDhanmHXAJBtrLBjBSFipFdo6jYDV8OOTpMpMiBJDux9Q5LsaUJWOEXsGoFTwWDihVioL9uId9t9EsGb4Vjx6"
		const stringM90FOfr = "QzYgww5NvpzI1MfNTfsfWWowoQne4nVx5k9AskMOiqXAuDhN6v9mKaW2sUssPWMuDGJA4Du2B2QcQ6nGaQjHe7OVCuqCS4Fu3"
		const uintvJ8zbS = BigInt("509")
		const OnXFinanceYbsFkHa = await OnXFinance.new(stringWa6y92, stringM90FOfr, uintvJ8zbS, {from: accounts[2]});
		const uintvmbkGeR = BigInt("0")
		const addressCEKfBmA = accounts[5]
		const uintKbrnqyN = BigInt("304")
		const addressyqYHJwH = accounts[4]
		const uintXY3WW3p = BigInt("1921")
		const addressvU6Xrc4 = accounts[1]
		const uintoQoTLDd = BigInt("449")
		const addressD30pa5p = "0x0000000000000000000000000000000000000001"
		const uintmcBBxDH = BigInt("1103")
		const addressQPwvoJP = accounts[5]
		const uintp5SvA5V = BigInt("1112")
		const addressM8S52M2 = accounts[1]
		const addressWZrNBXy = accounts[0]
		const uintblJQLHJ = BigInt("596")
		const addressV9akYP6 = accounts[0]
		const stringLd25fd2 = await OnXFinanceYbsFkHa.name.call({from: accounts[4]});
		const boolTIafhXT = await OnXFinanceYbsFkHa.transfer.call(addressCEKfBmA, uintvmbkGeR, {from: accounts[3]});
		const boolDQEaAfs = await OnXFinanceYbsFkHa.approve.call(addressyqYHJwH, uintKbrnqyN, {from: accounts[3]});
		const boolUEcFcZy = await OnXFinanceYbsFkHa.transfer.call(addressvU6Xrc4, uintXY3WW3p, {from: accounts[2]});
		const stringZhZxex = await OnXFinanceYbsFkHa.name.call({from: accounts[1]});
		const boolfn6gofz = await OnXFinanceYbsFkHa.approve.call(addressD30pa5p, uintoQoTLDd, {from: accounts[1]});
		const boolkahdiSX = await OnXFinanceYbsFkHa.approveAndCall.call(addressQPwvoJP, uintmcBBxDH, {from: accounts[0]});
		const boolhoSBWXh = await OnXFinanceYbsFkHa.transferFrom.call(addressWZrNBXy, addressM8S52M2, uintp5SvA5V, {from: accounts[5]});
		const boolsbmLFLz = await OnXFinanceYbsFkHa.decreaseAllowance.call(addressV9akYP6, uintblJQLHJ, {from: accounts[4]});

		assert.equal(boolDQEaAfs, true)
		assert.equal(boolTIafhXT, true)
		assert.equal(boolUEcFcZy, true)
		assert.equal(boolfn6gofz, true)
		assert.equal(stringLd25fd2, "b1nEKAz3uDhanmHXAJBtrLBjBSFipFdo6jYDV8OOTpMpMiBJDux9Q5LsaUJWOEXsGoFTwWDihVioL9uId9t9EsGb4Vjx6")
		assert.equal(stringZhZxex, "b1nEKAz3uDhanmHXAJBtrLBjBSFipFdo6jYDV8OOTpMpMiBJDux9Q5LsaUJWOEXsGoFTwWDihVioL9uId9t9EsGb4Vjx6")
		await expect(OnXFinanceYbsFkHa.approveAndCall.call(addressQPwvoJP, uintmcBBxDH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})