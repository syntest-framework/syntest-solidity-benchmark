const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintU9S5nR9 = BigInt("692")
		const stringwOa4AkU = "CaXXVGu19j3a7u5tQMwQ077v"
		const stringXVXbHFK = "A7wR9Jtd90h1Dp"
		const uintTLIwNL = BigInt("1128")
		const ANRXTokenlsnUCev = await ANRXToken.new(uintU9S5nR9, stringwOa4AkU, stringXVXbHFK, uintTLIwNL, {from: accounts[5]});
		const uint6iwcWo = BigInt("161")
		const addresslMcffhM = accounts[2]
		const uintYmb0zkH = BigInt("1702")
		const uintm3kWIw = BigInt("1915")
		const addressiRxSasp = accounts[0]
//		const uintyBftqbK = await ANRXTokenlsnUCev.redeem.call(uint6iwcWo, {from: "0x0000000000000000000000000000000000000001"});
//		const uint44iu4B = await ANRXTokenlsnUCev.totalSupply.call({from: accounts[3]});
//		const uintR5JxXEP = await ANRXTokenlsnUCev.balanceOf.call(addresslMcffhM, {from: accounts[1]});
//		const uintFNP1h0t = await ANRXTokenlsnUCev.issue.call(uintYmb0zkH, {from: accounts[4]});
//		const uintDEk2vhk = await ANRXTokenlsnUCev.totalSupply.call({from: accounts[3]});
//		const boolyaobM5A = await ANRXTokenlsnUCev.approve.call(addressiRxSasp, uintm3kWIw, {from: accounts[0]});

		await expect(ANRXTokenlsnUCev.redeem.call(uint6iwcWo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintmGsZlWO = BigInt("1218")
		const stringIwLICh = "DJmljPE5KvPGz2LK3QUDWiSTI1TqhTK72FUagcKof4YDf3jWGIiBcGybPJt7fdtpA6sxVDPTKnK6KqR2HMcyNlcDOTwK0wkP"
		const stringC08JWYS = "sg7MhuGwhpuEVM4euwTve7KvAFhruIh9lC6yzf6FBYsnExyNds74Qvxe6STV"
		const uintoi2N93v = BigInt("289")
		const ANRXTokenvFcT3kE = await ANRXToken.new(uintmGsZlWO, stringIwLICh, stringC08JWYS, uintoi2N93v, {from: accounts[1]});
		const uintgB0P6k = BigInt("74")
		const addressMXxGcow = accounts[1]
		const uintHjsS22Y = BigInt("878")
		const uintQ1PIdO3 = BigInt("81")
		const addressFljGhos = "0x0000000000000000000000000000000000000001"
		const addressvANhoL2 = accounts[3]
		const addressFEggndE = accounts[0]
		const boolfzssUka = await ANRXTokenvFcT3kE.approve.call(addressMXxGcow, uintgB0P6k, {from: accounts[5]});
//		const uintiIw7L1X = await ANRXTokenvFcT3kE.issue.call(uintHjsS22Y, {from: accounts[2]});
//		const uintm6Z5jA0 = await ANRXTokenvFcT3kE.issue.call(uintQ1PIdO3, {from: accounts[3]});
//		const uintn6b605B = await ANRXTokenvFcT3kE.allowance.call(addressvANhoL2, addressFljGhos, {from: accounts[4]});
//		const uintWe3cIi = await ANRXTokenvFcT3kE.balanceOf.call(addressFEggndE, {from: accounts[3]});
//		const uintlxuTJKv = await ANRXTokenvFcT3kE.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfzssUka, true)
		await expect(ANRXTokenvFcT3kE.issue.call(uintHjsS22Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uinterCOFNN = BigInt("29")
		const stringJhPO8oN = "9q15EaDgeR8IqMlRBxaSkpppXMd8A5wjoW1Wf2jvsN1DN89pmhzXMmowd"
		const stringj7q5Q67 = "3pbTAF8cnqKO1nKTgS3DB2YNfOvPOY9Fspf0HCIiA1hUOFgcy3pkINJdxEZv"
		const uintMPMQs5x = BigInt("1571")
		const ANRXTokenfJayRch = await ANRXToken.new(uinterCOFNN, stringJhPO8oN, stringj7q5Q67, uintMPMQs5x, {from: accounts[2]});
		const uintXndxqXq = BigInt("17")
		const addressLYpDERO = accounts[2]
		const addressm2dblP9 = accounts[2]
		const uintaPJISO7 = BigInt("1365")
		const addressA4HuOzI = accounts[4]
//		const boolwAmUMZv = await ANRXTokenfJayRch.transferFrom.call(addressm2dblP9, addressLYpDERO, uintXndxqXq, {from: accounts[1]});
//		const uintC7NdXdK = await ANRXTokenfJayRch.issue.call(uintaPJISO7, {from: accounts[4]});
//		const addressiPiJB6x = await ANRXTokenfJayRch.deprecate.call(addressA4HuOzI, {from: accounts[4]});
//		const uintCZcy3z = await ANRXTokenfJayRch.totalSupply.call({from: accounts[5]});

		await expect(ANRXTokenfJayRch.transferFrom.call(addressm2dblP9, addressLYpDERO, uintXndxqXq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintQaZKasA = BigInt("1568")
		const stringcUycWpE = "hC3iVCAuL5HxXLxSkeeu1vAbmPMGNuNisWxRIwkIZ6BvlU3zs9wdAb"
		const stringnrm7oAc = "UNdMYHxiBt3wsYztkA8GfDO9"
		const uintf2SczEV = BigInt("1270")
		const ANRXTokenPviJfi = await ANRXToken.new(uintQaZKasA, stringcUycWpE, stringnrm7oAc, uintf2SczEV, {from: accounts[5]});
		const addressXE87TdR = accounts[0]
		const uintuPllczF = await ANRXTokenPviJfi.balanceOf.call(addressXE87TdR, {from: accounts[1]});
		const uintM6WnTGy = await ANRXTokenPviJfi.totalSupply.call({from: accounts[1]});

		assert.equal(uintM6WnTGy, BigInt("1568"))
		assert.equal(uintuPllczF, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintW6l2trH = BigInt("1607")
		const stringaxpvlif = "9BPrhN7TvV2FmIlql53aFhmBEg8Wc9Ts109heTkBl"
		const stringRQIaoCC = "wHu5"
		const uintirDNlXD = BigInt("288")
		const ANRXTokenUYPfLa0 = await ANRXToken.new(uintW6l2trH, stringaxpvlif, stringRQIaoCC, uintirDNlXD, {from: accounts[2]});
		const addressVIaDZlg = accounts[1]
		const addressibyoqm = accounts[1]
		const uintfS4ZZms = BigInt("283")
		const uinti8CvWPg = BigInt("1345")
		const uintdRU8gKn = BigInt("61")
		const addressbDFofv = accounts[4]
		const addressVer5hgo = accounts[1]
		const addressdQSzW7 = accounts[3]
		const uintZ7FW6SA = await ANRXTokenUYPfLa0.allowance.call(addressibyoqm, addressVIaDZlg, {from: accounts[1]});
//		const uintwbhH1tf = await ANRXTokenUYPfLa0.setParams.call(uinti8CvWPg, uintfS4ZZms, {from: accounts[0]});
//		const boolnqZsi8 = await ANRXTokenUYPfLa0.approve.call(addressbDFofv, uintdRU8gKn, {from: accounts[1]});
//		const uintYLI8vP0 = await ANRXTokenUYPfLa0.allowance.call(addressdQSzW7, addressVer5hgo, {from: accounts[3]});

		assert.equal(uintZ7FW6SA, BigInt("0"))
		await expect(ANRXTokenUYPfLa0.setParams.call(uinti8CvWPg, uintfS4ZZms, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintTXs45bb = BigInt("1602")
		const stringkIpUbv1 = "xjCNofU9YhnLpkZsas5sx5uZbJXMG93RkSLLXhdvJCgiSWiGnXntpyU23yIPsT6d"
		const stringBJmPii7 = "fjeiovO1Ea4zJj7yyGHxONmkTTJ95SqOEDklzvRB048MrqvDpadwGItTuYKH9hFD94Tu3zbzsfyNiJOLvYmHFhuFhMciJ"
		const uintVHALZgq = BigInt("377")
		const ANRXTokendxsIXYl = await ANRXToken.new(uintTXs45bb, stringkIpUbv1, stringBJmPii7, uintVHALZgq, {from: accounts[0]});
		const uintFIbwRwo = BigInt("1917")
		const addresskpViLbM = accounts[3]
		const uinteiDvEll = BigInt("1259")
		const addressqGqghfu = accounts[5]
		const addressHw2jjOE = accounts[2]
		const uinttW2uzv4 = BigInt("2011")
		const uintGGZjFtl = BigInt("899")
//		const booliELsWNK = await ANRXTokendxsIXYl.transfer.call(addresskpViLbM, uintFIbwRwo, {from: accounts[4]});
//		const uinttoG2dGa = await ANRXTokendxsIXYl.totalSupply.call({from: accounts[2]});
//		const uintkvjcaKs = await ANRXTokendxsIXYl.totalSupply.call({from: accounts[3]});
//		const bool55uc5Q = await ANRXTokendxsIXYl.transferFrom.call(addressHw2jjOE, addressqGqghfu, uinteiDvEll, {from: accounts[3]});
//		const uintNqRSYmN = await ANRXTokendxsIXYl.setParams.call(uintGGZjFtl, uinttW2uzv4, {from: accounts[2]});

		await expect(ANRXTokendxsIXYl.transfer.call(addresskpViLbM, uintFIbwRwo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintSST5hOL = BigInt("1098")
		const stringmF3dxJM = "SjIlBlqguSNCW66yhPtbqcpPJhTGshvyR9rtQZnmWk26PCIyc8pwAHI92QDScxsdBj8ALJfIvms6OzJqvu41mlg4ccv"
		const stringAY3sSJi = "f1p7mGvfrTEmqNQx7LMh8jMc"
		const uintQp0sCrZ = BigInt("21")
		const ANRXTokenkTCFrg = await ANRXToken.new(uintSST5hOL, stringmF3dxJM, stringAY3sSJi, uintQp0sCrZ, {from: accounts[3]});
		const addressYpSslSi = accounts[0]
		const addressL4zN52a = accounts[5]
		const addressmUuOuwK = accounts[1]
		const uintdd55W2 = await ANRXTokenkTCFrg.allowance.call(addressL4zN52a, addressYpSslSi, {from: accounts[2]});
		const address4AmXrT = await ANRXTokenkTCFrg.deprecate.call(addressmUuOuwK, {from: accounts[3]});

		assert.equal(uintdd55W2, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintumAxUbg = BigInt("12")
		const stringbG6vEyO = "H7KfWtvTniWoxLhfEJuMdAgxw6fulccgtIB39nPAJASg41dibUZ1bAoPLRjLCCiS6CmNuCnRfI5p"
		const stringU8unazP = "Yfu1atJtlmu8fCL7BN4QabaPEo64mnWWClXC689CsT1GIcafMlbtP"
		const uintOgHuwwI = BigInt("928")
		const ANRXTokenG0V8MOm = await ANRXToken.new(uintumAxUbg, stringbG6vEyO, stringU8unazP, uintOgHuwwI, {from: accounts[1]});
		const uintKhymq9 = BigInt("733")
		const addresshwsc7xl = accounts[1]
		const uintOmLgp4Z = BigInt("1749")
		const uintzNGCWcI = BigInt("1546")
		const boolBqEDnqi = await ANRXTokenG0V8MOm.approve.call(addresshwsc7xl, uintKhymq9, {from: accounts[4]});
//		const uint2NVB98 = await ANRXTokenG0V8MOm.setParams.call(uintzNGCWcI, uintOmLgp4Z, {from: accounts[1]});

		assert.equal(boolBqEDnqi, true)
		await expect(ANRXTokenG0V8MOm.setParams.call(uintzNGCWcI, uintOmLgp4Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintmwNizba = BigInt("695")
		const stringIcug8r = "XP"
		const stringBVabWG7 = "veSsQPMTJlAq9xvlJ"
		const uintC4XqEtt = BigInt("1618")
		const ANRXTokenDDvwelI = await ANRXToken.new(uintmwNizba, stringIcug8r, stringBVabWG7, uintC4XqEtt, {from: accounts[1]});
		const uintmDR87tI = BigInt("82")
		const uintQNzlUDn = BigInt("720")
		const addressaxeD8g = accounts[0]
		const uintOJ5IKmG = BigInt("1450")
		const uintVVjhCHP = BigInt("1352")
		const uintDPkwlx4 = await ANRXTokenDDvwelI.issue.call(uintmDR87tI, {from: accounts[1]});
		const boolAuytzln = await ANRXTokenDDvwelI.approve.call(addressaxeD8g, uintQNzlUDn, {from: accounts[3]});
//		const uintcToSZSg = await ANRXTokenDDvwelI.setParams.call(uintVVjhCHP, uintOJ5IKmG, {from: accounts[4]});

		assert.equal(boolAuytzln, true)
		await expect(ANRXTokenDDvwelI.setParams.call(uintVVjhCHP, uintOJ5IKmG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintFWX2Hyg = BigInt("1514")
		const stringNKCyhxV = "2z2Apyg6ryo6z9pzTjISio467BmICxlaeUZPwBiqpf3VCPZSbWADuM0Pr7l"
		const stringgIFGpa6 = "T1Ms3tOkRrAUD79VXQAhc0VZPQEtxwn7ER3ageSRsHJi7U7RlPuwjQROccSg5pVx59qWjQVAi7i1OpyUyQOyMemGw"
		const uintpdo5VD = BigInt("536")
		const ANRXTokenxkKfSFE = await ANRXToken.new(uintFWX2Hyg, stringNKCyhxV, stringgIFGpa6, uintpdo5VD, {from: accounts[2]});
		const uintehb4eyX = BigInt("1091")
		const addressZcFK0aJ = accounts[3]
		const addressunYMId = accounts[2]
		const uintU2cJR1a = await ANRXTokenxkKfSFE.redeem.call(uintehb4eyX, {from: accounts[2]});
		const uintP4RzA3Z = await ANRXTokenxkKfSFE.allowance.call(addressunYMId, addressZcFK0aJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintP4RzA3Z, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintkNKRxuv = BigInt("1873")
		const stringmHkx6SQ = "xF2w3LBh1Kqf1wpX8XrPNzFYxWW618Izo5ztoYzM41ufPjcCHpze261QlFW"
		const stringwVM1YE4 = "TINXasf8jvNUyenGk9OC044H2GMWTyGPyB6DUpadQGP5QodjfTIxAgouiE1U95I8nTLgGfxHTjlrEz7GdFtES"
		const uintpIq20Zd = BigInt("1661")
		const ANRXTokenm9m3us3 = await ANRXToken.new(uintkNKRxuv, stringmHkx6SQ, stringwVM1YE4, uintpIq20Zd, {from: "0x0000000000000000000000000000000000000001"});
		const addressobyTOjY = accounts[2]
		const addressEiuowhh = accounts[0]
		const addressfnFSkXI = accounts[4]
		const uintaxKexnp = BigInt("884")
		const uintptv6Ad = await ANRXTokenm9m3us3.allowance.call(addressEiuowhh, addressobyTOjY, {from: accounts[4]});
		const uintuh7tFfg = await ANRXTokenm9m3us3.balanceOf.call(addressfnFSkXI, {from: accounts[1]});
		const uintK5ewRDp = await ANRXTokenm9m3us3.issue.call(uintaxKexnp, {from: accounts[5]});
	});

	it('test for ANRXToken', async () => {
		const uintpPMWi4h = BigInt("1568")
		const stringcUycWpE = "hC3iVCAuL5HxXLxSkeeu1vAbmPMGNuNisWxRIwkIZ6BvlU3zs9wdAb"
		const stringnrm7oAc = "UNdMYHxiBt3wsYztkA8GfDO9"
		const uintX8YKdgC = BigInt("1270")
		const ANRXTokenPviJfi = await ANRXToken.new(uintpPMWi4h, stringcUycWpE, stringnrm7oAc, uintX8YKdgC, {from: accounts[5]});
		const addressalbG3dr = accounts[1]
		const uintOv4bc6K = BigInt("232")
		const uintN9UWjMI = BigInt("4")
		const uintuPllczF = await ANRXTokenPviJfi.balanceOf.call(addressalbG3dr, {from: accounts[1]});
//		const uintvhNnaW = await ANRXTokenPviJfi.setParams.call(uintN9UWjMI, uintOv4bc6K, {from: accounts[5]});

		assert.equal(uintuPllczF, BigInt("0"))
		await expect(ANRXTokenPviJfi.setParams.call(uintN9UWjMI, uintOv4bc6K, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})