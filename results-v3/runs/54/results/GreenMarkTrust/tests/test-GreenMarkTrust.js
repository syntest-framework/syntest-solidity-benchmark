const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintK89WVYP = BigInt("1447")
		const stringrV215qI = "R0"
		const stringayiYo1P = "ffAq5zyLhyLGXgT8hdyup1WmU7Q2uIYJ8gank0QWZica5SGEUsQxBWq"
		const GreenMarkTrustAtFJp7x = await GreenMarkTrust.new(uintK89WVYP, stringrV215qI, stringayiYo1P, {from: accounts[4]});
		const uintdn3khjg = BigInt("17")
		const addressWxc4Htf = accounts[3]
		const addressG4B5bSk = accounts[5]
		const byteJwtGYEP = "0x000910041b12050c1011182002140c0f141d0503"
		const uinthxGKKtR = BigInt("1220")
		const addressS6ST5Xa = accounts[4]
		const uintNgmO9Oq = BigInt("47")
		const booloHT2VK5 = await GreenMarkTrustAtFJp7x.transferFrom.call(addressG4B5bSk, addressWxc4Htf, uintdn3khjg, {from: accounts[1]});
		const boolXSA3Bav = await GreenMarkTrustAtFJp7x.approveAndCall.call(addressS6ST5Xa, uinthxGKKtR, byteJwtGYEP, {from: accounts[1]});
		const boolDwa1wzz = await GreenMarkTrustAtFJp7x.burn.call(uintNgmO9Oq, {from: accounts[2]});

		await expect(GreenMarkTrustAtFJp7x.transferFrom.call(addressG4B5bSk, addressWxc4Htf, uintdn3khjg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintpi3DV7h = BigInt("190")
		const stringSgKMQjx = "34bFJIsLiIeWVBKlp88d19LHo7E2zNcOHprjnXSRx36yGcd5VnbHVdb7DWZkxFJOe87MLz7dvFcmI8BvoOm20kg"
		const stringesQ1VFi = "zVHkO6YUJ"
		const GreenMarkTrustTkWG7my = await GreenMarkTrust.new(uintpi3DV7h, stringSgKMQjx, stringesQ1VFi, {from: "0x0000000000000000000000000000000000000001"});
		const uintzA9osb4 = BigInt("908")
		const addresskRNFyf1 = accounts[5]
		const uintsbSRkbC = BigInt("361")
		const addressQnJTk57 = accounts[4]
		const uintNozbrKO = BigInt("1756")
		const boolF3YBwhQ = await GreenMarkTrustTkWG7my.burnFrom.call(addresskRNFyf1, uintzA9osb4, {from: accounts[3]});
		const boolOLxCGvn = await GreenMarkTrustTkWG7my.transfer.call(addressQnJTk57, uintsbSRkbC, {from: accounts[1]});
		const boolXd6cuTh = await GreenMarkTrustTkWG7my.burn.call(uintNozbrKO, {from: accounts[0]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintcPv0Tv4 = BigInt("2032")
		const string08H7AL = "i5hLOpXMLYUvmauh12"
		const stringtfdMJiZ = "HCY7lDXFCITeOEsPvA6Fy2WRBxMmyNycGELF9WXn4ZYYFNcKE2TAo0hlO5ESZ6IZC"
		const GreenMarkTrustvx5gxVH = await GreenMarkTrust.new(uintcPv0Tv4, string08H7AL, stringtfdMJiZ, {from: accounts[4]});
		const bytebEAkSBL = "0x131010111a0112071c1b1d14201f011617022016070e"
		const uintuh133je = BigInt("1666")
		const addressU4Bh9Vv = accounts[1]
		const byteKIgQtTW = "0x12140012051d0519061a15121c200e07060c13141e161f0d18071707071b1a13"
		const uintjsxQ2dV = BigInt("1531")
		const addressRWQFcqr = accounts[5]
		const uintbGHR3Z = BigInt("668")
		const uintvuSP3m4 = BigInt("1642")
		const addressokJur5o = accounts[4]
		const addressgnseGLQ = accounts[4]
		const uintFAj6WyM = BigInt("360")
		const boolHeEBFF5 = await GreenMarkTrustvx5gxVH.approveAndCall.call(addressU4Bh9Vv, uintuh133je, bytebEAkSBL, {from: accounts[2]});
		const boolDsG7Z0f = await GreenMarkTrustvx5gxVH.approveAndCall.call(addressRWQFcqr, uintjsxQ2dV, byteKIgQtTW, {from: accounts[4]});
		const boolhvf9lpg = await GreenMarkTrustvx5gxVH.burn.call(uintbGHR3Z, {from: accounts[2]});
		const booleapmDSW = await GreenMarkTrustvx5gxVH.transferFrom.call(addressgnseGLQ, addressokJur5o, uintvuSP3m4, {from: accounts[4]});
		const boolznRGvMG = await GreenMarkTrustvx5gxVH.burn.call(uintFAj6WyM, {from: accounts[3]});

		await expect(GreenMarkTrustvx5gxVH.approveAndCall.call(addressU4Bh9Vv, uintuh133je, bytebEAkSBL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintRFdASRT = BigInt("1037")
		const stringutT1gSF = "fwFOMpKwQ"
		const string0sFtQB = "bzRQ75qAEWa"
		const GreenMarkTrustyekcF0I = await GreenMarkTrust.new(uintRFdASRT, stringutT1gSF, string0sFtQB, {from: accounts[2]});
		const uintqcTzPD = BigInt("1818")
		const addressjn1n3CP = accounts[0]
		const uinty3WhZAi = BigInt("1889")
		const addressIefKUqI = accounts[4]
		const uintpWvswXk = BigInt("645")
		const address1WVZ3e = accounts[1]
		const addresstcCVZmh = accounts[4]
		const uintVgLaTVW = BigInt("225")
		const addressZZbcnLd = "0x0000000000000000000000000000000000000001"
		const addressx6fPDW1 = accounts[4]
		const boolEJWNYqT = await GreenMarkTrustyekcF0I.burnFrom.call(addressjn1n3CP, uintqcTzPD, {from: accounts[3]});
		const boolHZqgfXh = await GreenMarkTrustyekcF0I.burnFrom.call(addressIefKUqI, uinty3WhZAi, {from: accounts[1]});
		const boolgSYy2nj = await GreenMarkTrustyekcF0I.transferFrom.call(addresstcCVZmh, address1WVZ3e, uintpWvswXk, {from: accounts[3]});
		const boolkbK9Qp = await GreenMarkTrustyekcF0I.transferFrom.call(addressx6fPDW1, addressZZbcnLd, uintVgLaTVW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustyekcF0I.burnFrom.call(addressjn1n3CP, uintqcTzPD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintAy2wpP = BigInt("1330")
		const stringtWvjpji = "hhyCr7"
		const stringq6Vkcxt = "qOt37JlwN942vgMEsOKQayDUFvM9LibHk2b6rCyOgW6BMqgl5vueIAg3BNZkvhaQwM4HXB1Hne56Fuh3UBXmwiYkxQOLYm"
		const GreenMarkTrustj8YtNUr = await GreenMarkTrust.new(uintAy2wpP, stringtWvjpji, stringq6Vkcxt, {from: accounts[3]});
		const uintPab1WKT = BigInt("1624")
		const address5Eh0z7 = "0x0000000000000000000000000000000000000001"
		const uinttlund2S = BigInt("1115")
		const addresswLeSfku = "0x0000000000000000000000000000000000000001"
		const bytek8fTGnA = "0x1e061714041f1f0a1f1103080e06"
		const uintk3pk9Lp = BigInt("272")
		const addressscyBLCe = accounts[4]
		const boolkAy3uMQ = await GreenMarkTrustj8YtNUr.transfer.call(address5Eh0z7, uintPab1WKT, {from: accounts[2]});
		const bools0s8f45 = await GreenMarkTrustj8YtNUr.transfer.call(addresswLeSfku, uinttlund2S, {from: accounts[1]});
		const boolT5CP7jT = await GreenMarkTrustj8YtNUr.approveAndCall.call(addressscyBLCe, uintk3pk9Lp, bytek8fTGnA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustj8YtNUr.transfer.call(address5Eh0z7, uintPab1WKT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintOUDUxv = BigInt("1387")
		const stringrk16Oka = "Wz6dbo6RwmEUeo7ejxvHkomJNhMAF8DnIt5qrNUXYsO6foOYFYiJzuBJFzrgNTXBV7tEPEgmO8jqCqOjn8"
		const stringmBI99jr = "FfzhUm9cTVdQBBeNxNKkZZKquEQI9gEkg9bmsatYkjK8uyHNVU8QypOr9MHO8IgrArk25vqq94UNhbXCF"
		const GreenMarkTrusttn5J5Ya = await GreenMarkTrust.new(uintOUDUxv, stringrk16Oka, stringmBI99jr, {from: accounts[3]});
		const uintTK8RABW = BigInt("233")
		const addressBiVLaeL = accounts[4]
		const uintd7ERQN5 = BigInt("1933")
		const byteXSoJfpx = "0x0c0f1d0a09060b0b1c0f030a141613150304130d0c130113"
		const uintYG2QJLH = BigInt("1605")
		const addressiclUHI1 = accounts[3]
		const uintua6ytv7 = BigInt("1717")
		const addressw5uguJz = accounts[0]
		const boolihUyHJ = await GreenMarkTrusttn5J5Ya.approve.call(addressBiVLaeL, uintTK8RABW, {from: accounts[3]});
		const boolVIqHtDr = await GreenMarkTrusttn5J5Ya.burn.call(uintd7ERQN5, {from: accounts[1]});
		const boolkxSDKCO = await GreenMarkTrusttn5J5Ya.approveAndCall.call(addressiclUHI1, uintYG2QJLH, byteXSoJfpx, {from: accounts[2]});
		const boolDMmgQMt = await GreenMarkTrusttn5J5Ya.transfer.call(addressw5uguJz, uintua6ytv7, {from: accounts[1]});

		assert.equal(boolihUyHJ, true)
		await expect(GreenMarkTrusttn5J5Ya.burn.call(uintd7ERQN5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})