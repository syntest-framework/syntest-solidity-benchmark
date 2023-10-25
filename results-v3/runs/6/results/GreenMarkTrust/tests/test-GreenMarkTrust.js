const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintT3QJcK3 = BigInt("1618")
		const stringIo5b1jg = "q0pHX64f5fiD7KbI4Ia4MgzVSdmm0arKu21jBFagNSxpEvVl7mGkhWNgLX9fDTMQyyM6JN6VaVzWgv9k7IjSU"
		const stringpmzQwGT = "Lm5kuOtPzvjDghQzXesxYJKWkiAGjsAneSj1bmpUffloOgzwceUWaiGm5hdMYChLRdLAWUeD51k"
		const GreenMarkTrustLrUvAtn = await GreenMarkTrust.new(uintT3QJcK3, stringIo5b1jg, stringpmzQwGT, {from: accounts[4]});
		const uintcwSvE50 = BigInt("402")
		const addressqBzU0Qh = "0x0000000000000000000000000000000000000001"
		const addressUZprbKS = accounts[4]
		const uintGBYHCeh = BigInt("563")
		const uintbZPsrnN = BigInt("1267")
		const addressH4DjiKm = accounts[3]
		const boolSwYPRi = await GreenMarkTrustLrUvAtn.transferFrom.call(addressUZprbKS, addressqBzU0Qh, uintcwSvE50, {from: accounts[1]});
		const boolnAFgptq = await GreenMarkTrustLrUvAtn.burn.call(uintGBYHCeh, {from: accounts[2]});
		const boolwovfG5H = await GreenMarkTrustLrUvAtn.approve.call(addressH4DjiKm, uintbZPsrnN, {from: accounts[2]});

		await expect(GreenMarkTrustLrUvAtn.transferFrom.call(addressUZprbKS, addressqBzU0Qh, uintcwSvE50, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintMcilZpk = BigInt("1465")
		const stringUUR9zhd = "7nYaafehuB2qifBMlO4KLwiOlO9vaqSB7EpvOyLwrZEAdU4JXHUrPiial1bLRdRu1JlrNqo"
		const stringU0ZFtCC = "vH8hPXowdYyfbsAMDnHHwW4rs6jcQs1RvRDrL7vHcnP8pdn8m"
		const GreenMarkTrustT2PQCuK = await GreenMarkTrust.new(uintMcilZpk, stringUUR9zhd, stringU0ZFtCC, {from: accounts[4]});
		const byteoqzDtU = "0x130b0d120c08141113060417191612130719090d1819"
		const uintZKF8TS3 = BigInt("1580")
		const addressW0NuhF4 = accounts[1]
		const uinthdy5zsX = BigInt("935")
		const uintZf0k3qS = BigInt("1794")
		const addressry0Qtxv = "0x0000000000000000000000000000000000000001"
		const uintl0T2UlI = BigInt("1887")
		const addressZfYUjFw = accounts[0]
		const addressIcplAC = accounts[1]
		const uinttErArxL = BigInt("667")
		const addressujDZuCl = accounts[2]
		const byteLyGJFmK = "0x0c1e011d170e1c1117120e0a0e171a1c0a"
		const uintglKE0HR = BigInt("1685")
		const addressV2MGZus = accounts[1]
		const booll4vKTks = await GreenMarkTrustT2PQCuK.approveAndCall.call(addressW0NuhF4, uintZKF8TS3, byteoqzDtU, {from: accounts[3]});
		const boolULShaf = await GreenMarkTrustT2PQCuK.burn.call(uinthdy5zsX, {from: "0x0000000000000000000000000000000000000001"});
		const bool0B5P8J = await GreenMarkTrustT2PQCuK.approve.call(addressry0Qtxv, uintZf0k3qS, {from: accounts[3]});
		const boolPGQmtdH = await GreenMarkTrustT2PQCuK.transferFrom.call(addressIcplAC, addressZfYUjFw, uintl0T2UlI, {from: accounts[0]});
		const boolNIofkTJ = await GreenMarkTrustT2PQCuK.transfer.call(addressujDZuCl, uinttErArxL, {from: accounts[3]});
		const boolJ0Pczh = await GreenMarkTrustT2PQCuK.approveAndCall.call(addressV2MGZus, uintglKE0HR, byteLyGJFmK, {from: accounts[1]});

		await expect(GreenMarkTrustT2PQCuK.approveAndCall.call(addressW0NuhF4, uintZKF8TS3, byteoqzDtU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintI2jKlGo = BigInt("826")
		const stringi99JFKd = "wens6eTNRYhXcs51ALKoTpFLohpu2voNx4TW6y4OwfBJlkST4Dwga1rpoTo1YUP0Fs7TI6I6k8QDnfMxjRVClCd0FOqEN91fFT7"
		const stringSIkcAl = "endxPo4oeRIWUUhX"
		const GreenMarkTrustZNrcssk = await GreenMarkTrust.new(uintI2jKlGo, stringi99JFKd, stringSIkcAl, {from: accounts[3]});
		const uintQxpiiu8 = BigInt("377")
		const addressb1QcoqO = accounts[1]
		const uintQ2sLS0r = BigInt("1668")
		const addressHl6VOia = accounts[4]
		const uintATJg5Fr = BigInt("1818")
		const booliOcT2pL = await GreenMarkTrustZNrcssk.approve.call(addressb1QcoqO, uintQxpiiu8, {from: accounts[0]});
		const boolGz5hQ6q = await GreenMarkTrustZNrcssk.burnFrom.call(addressHl6VOia, uintQ2sLS0r, {from: accounts[2]});
		const booluKatWGR = await GreenMarkTrustZNrcssk.burn.call(uintATJg5Fr, {from: accounts[3]});

		assert.equal(booliOcT2pL, true)
		await expect(GreenMarkTrustZNrcssk.burnFrom.call(addressHl6VOia, uintQ2sLS0r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintPccLD2 = BigInt("1232")
		const stringsezGtQ = "q9RcObrA8Bhcvr1pJkF6387Q1ObY71W9uKxI"
		const stringYHQ9nRF = "vgqHjlpltYlUd9AYl5OyGj4KtTYMYD333i8oTtjLhwAM"
		const GreenMarkTrustLRydua = await GreenMarkTrust.new(uintPccLD2, stringsezGtQ, stringYHQ9nRF, {from: accounts[0]});
		const uintYnJSt1D = BigInt("1262")
		const uintmNB7lnI = BigInt("368")
		const addressrtebnow = accounts[0]
		const uintomVlvRM = BigInt("1802")
		const uintMRIynG0 = BigInt("884")
		const address38sHkX = accounts[3]
		const byte475G1A = "0x15140a0c1f110200"
		const uintQTS2tpF = BigInt("1085")
		const addressYRmibn8 = accounts[0]
		const boolSsttku = await GreenMarkTrustLRydua.burn.call(uintYnJSt1D, {from: "0x0000000000000000000000000000000000000001"});
		const boolqTB2TTT = await GreenMarkTrustLRydua.approve.call(addressrtebnow, uintmNB7lnI, {from: accounts[1]});
		const booltdDS9bR = await GreenMarkTrustLRydua.burn.call(uintomVlvRM, {from: accounts[5]});
		const boolZwXdUS = await GreenMarkTrustLRydua.approve.call(address38sHkX, uintMRIynG0, {from: accounts[1]});
		const boolPQaYMI = await GreenMarkTrustLRydua.approveAndCall.call(addressYRmibn8, uintQTS2tpF, byte475G1A, {from: accounts[2]});

		await expect(GreenMarkTrustLRydua.burn.call(uintYnJSt1D, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintX5SBvO = BigInt("867")
		const stringOqLdUt8 = "8Gr4suJCldcFOnCnlUeTYUOmpv6JaBWxB1DUlom"
		const stringEeLyaeo = "xcbxZtooDD4wfBESfBJ8SVEqZpOPvqB0CUXcv56vKELaHNUqvwgVixZLAi9yhykeYgZKSPf1RXxUh69YVtF"
		const GreenMarkTrustBb3LuCg = await GreenMarkTrust.new(uintX5SBvO, stringOqLdUt8, stringEeLyaeo, {from: "0x0000000000000000000000000000000000000001"});
		const uintDk5ICQT = BigInt("1604")
		const addressVZg8erA = accounts[1]
		const uintSkNz69 = BigInt("993")
		const addressnxEdQLO = accounts[4]
		const uintHtc409f = BigInt("2030")
		const addressAhWEvld = accounts[5]
		const addressf4bKV4W = accounts[1]
		const boolOjLhbks = await GreenMarkTrustBb3LuCg.approve.call(addressVZg8erA, uintDk5ICQT, {from: accounts[1]});
		const boolgo7wIYI = await GreenMarkTrustBb3LuCg.burnFrom.call(addressnxEdQLO, uintSkNz69, {from: accounts[4]});
		const boolEWfPEa = await GreenMarkTrustBb3LuCg.transferFrom.call(addressf4bKV4W, addressAhWEvld, uintHtc409f, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintcZ6w0o8 = BigInt("963")
		const stringN7b364d = "tivBtPiMGhcmKnGX2VIJyNmv"
		const stringcD0wh1 = "LVvx7IG7GdCeMLPlVanJXfzfl5fNrqKWxzqtWzaxJlisDReCaqRFpXdNtogzcqHOAaN"
		const GreenMarkTrustL9AzUFa = await GreenMarkTrust.new(uintcZ6w0o8, stringN7b364d, stringcD0wh1, {from: accounts[2]});
		const uintVSeHsxz = BigInt("1378")
		const addressYJvIrZr = accounts[0]
		const uintA9cqvC9 = BigInt("438")
		const addressSfqvqzj = accounts[6]
		const addressAWY2lu = accounts[4]
		const boolPSyVPl = await GreenMarkTrustL9AzUFa.transfer.call(addressYJvIrZr, uintVSeHsxz, {from: accounts[4]});
		const boolA1KVtVZ = await GreenMarkTrustL9AzUFa.transferFrom.call(addressAWY2lu, addressSfqvqzj, uintA9cqvC9, {from: accounts[2]});

		await expect(GreenMarkTrustL9AzUFa.transfer.call(addressYJvIrZr, uintVSeHsxz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})