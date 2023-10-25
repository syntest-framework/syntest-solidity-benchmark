const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringFtLpcpi = "14U76koh"
		const stringStVkVOT = "QmCDw2cAgoRqXalIrBI7gokOB99LSHzkufiWvgyYGT2hDieKa5WB8FI4FsxHaoEtqi"
		const uintmHP1oBH = BigInt("157")
		const WeedburnDZ5vxr5 = await Weedburn.new(stringFtLpcpi, stringStVkVOT, uintmHP1oBH, {from: accounts[3]});
		const uintu6VpgAt = BigInt("496")
		const addressbBM5Qlt = "0x0000000000000000000000000000000000000001"
		const uintrNUoeZR = BigInt("150")
		const addressmsWRtuU = accounts[2]
		const boolVMt0Efv = await WeedburnDZ5vxr5.transfer.call(addressbBM5Qlt, uintu6VpgAt, {from: accounts[2]});
		const addressQzoNBFY = await WeedburnDZ5vxr5.burnFrom.call(addressmsWRtuU, uintrNUoeZR, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uinti73mvMG = BigInt("1635")
		const addressYFnbDL8 = accounts[0]
		const addressMoNJRDE = accounts[0]
		const uintvBk2YKe = BigInt("1481")
		const uintix2rWX9 = BigInt("1408")
		const addressY0092yz = accounts[3]
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addressMoNJRDE, addressYFnbDL8, uinti73mvMG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YT0uRxa = await WeedburnTPvSmAY.burn.call(uintvBk2YKe, {from: accounts[4]});
//		const booloOTAuOP = await WeedburnTPvSmAY.decreaseAllowance.call(addressY0092yz, uintix2rWX9, {from: accounts[4]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[3]});
//		await WeedburnTPvSmAY.disableLimitMode.call({from: accounts[1]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[5]});

		await expect(WeedburnTPvSmAY.transferFrom.call(addressMoNJRDE, addressYFnbDL8, uinti73mvMG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uintuWYRR4w = BigInt("1635")
		const addressyzYUPzX = accounts[0]
		const addressfgIbgYq = accounts[0]
		const uintjH1ZWxd = BigInt("1470")
		const uint8gpxqQWw = await WeedburnTPvSmAY.decimals.call({from: accounts[2]});
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addressfgIbgYq, addressyzYUPzX, uintuWYRR4w, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YT0uRxa = await WeedburnTPvSmAY.burn.call(uintjH1ZWxd, {from: accounts[4]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[3]});
//		await WeedburnTPvSmAY.disableLimitMode.call({from: accounts[1]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[5]});

		assert.equal(uint8gpxqQWw, BigInt("18"))
		await expect(WeedburnTPvSmAY.transferFrom.call(addressfgIbgYq, addressyzYUPzX, uintuWYRR4w, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uintVhnVCG5 = BigInt("963")
		const uintDSRnqjP = BigInt("1470")
		const addresss0qYPKA = accounts[0]
		const addressVKu0fdf = accounts[2]
		const uintB4dE6X = BigInt("86")
		const addressjXXoFES = accounts[0]
		const addressClXrdff = accounts[0]
		const uint8gpxqQWw = await WeedburnTPvSmAY.decimals.call({from: accounts[2]});
//		const uint256GR2v7Ye = await WeedburnTPvSmAY.burn.call(uintVhnVCG5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YT0uRxa = await WeedburnTPvSmAY.burn.call(uintDSRnqjP, {from: accounts[4]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[3]});
//		await WeedburnTPvSmAY.disableLimitMode.call({from: accounts[1]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[5]});
//		const uint256gRlgdmD = await WeedburnTPvSmAY.allowance.call(addressVKu0fdf, addresss0qYPKA, {from: accounts[3]});
//		const boolg1b2GWS = await WeedburnTPvSmAY.transferFrom.call(addressClXrdff, addressjXXoFES, uintB4dE6X, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8gpxqQWw, BigInt("18"))
		await expect(WeedburnTPvSmAY.burn.call(uintVhnVCG5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uintwRzlN3N = BigInt("1635")
		const addressVaFjJh7 = accounts[0]
		const addresskIPskxy = accounts[0]
		const uinti0P3Mp5 = BigInt("1441")
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[3]});
//		const uint8gpxqQWw = await WeedburnTPvSmAY.decimals.call({from: accounts[2]});
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addresskIPskxy, addressVaFjJh7, uintwRzlN3N, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8zK7DzoE = await WeedburnTPvSmAY.decimals.call({from: accounts[5]});
//		const uint256YT0uRxa = await WeedburnTPvSmAY.burn.call(uinti0P3Mp5, {from: accounts[4]});
		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[3]});
//		await WeedburnTPvSmAY.disableLimitMode.call({from: accounts[1]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[5]});

		await expect(WeedburnTPvSmAY.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburndRjrQkl = await Weedburn.new({from: accounts[3]});
		const uintbXLQQA = BigInt("648")
		const addressyoudG4m = accounts[1]
		const uintYt92ClM = BigInt("1237")
		const addressPLOvQ4b = accounts[5]
		const uintmjxLM6M = BigInt("2019")
		const addressdpv9EMb = accounts[4]
		const uint8P3D7vKC = await WeedburndRjrQkl.decimals.call({from: accounts[0]});
		const stringOfdwydx = await WeedburndRjrQkl.symbol.call({from: accounts[3]});
		const boolPV4jhz = await WeedburndRjrQkl.transfer.call(addressyoudG4m, uintbXLQQA, {from: accounts[3]});
		const uint8Fl1RMSJ = await WeedburndRjrQkl.decimals.call({from: accounts[2]});
//		const boolksBJJI = await WeedburndRjrQkl.transfer.call(addressPLOvQ4b, uintYt92ClM, {from: accounts[1]});
//		const addressOanO33Q = await WeedburndRjrQkl.burnFrom.call(addressdpv9EMb, uintmjxLM6M, {from: accounts[2]});

		assert.equal(boolPV4jhz, true)
		assert.equal(stringOfdwydx, "Weedburn")
		assert.equal(uint8Fl1RMSJ, BigInt("18"))
		assert.equal(uint8P3D7vKC, BigInt("18"))
		await expect(WeedburndRjrQkl.transfer.call(addressPLOvQ4b, uintYt92ClM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uintej79Ohs = BigInt("1153")
		const addresso9sGN6b = accounts[1]
		const uintmGtVoWD = BigInt("1635")
		const addressycMay7u = accounts[1]
		const addresspksbppA = accounts[0]
		const uintqGY5dGV = BigInt("438")
		const uintL0J4FlC = BigInt("1297")
		const addressWEqVN1 = accounts[3]
		const addressv6h73B = accounts[5]
		const uintOuDLd2 = BigInt("1173")
		const addressJbDVP3s = accounts[0]
//		const addressUWOc8ow = await WeedburnTPvSmAY.burnFrom.call(addresso9sGN6b, uintej79Ohs, {from: accounts[1]});
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addresspksbppA, addressycMay7u, uintmGtVoWD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256KTY5k1W = await WeedburnTPvSmAY.totalSupply.call({from: accounts[0]});
//		const uint256YT0uRxa = await WeedburnTPvSmAY.burn.call(uintqGY5dGV, {from: accounts[4]});
//		const booloOTAuOP = await WeedburnTPvSmAY.decreaseAllowance.call(addressWEqVN1, uintL0J4FlC, {from: accounts[4]});
//		const stringdDX5QFj = await WeedburnTPvSmAY.name.call({from: accounts[4]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[3]});
//		await WeedburnTPvSmAY.disableLimitMode.call({from: accounts[1]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[5]});
//		const uint256GcrBg6o = await WeedburnTPvSmAY.balanceOf.call(addressv6h73B, {from: accounts[1]});
//		const boolNdp0qFQ = await WeedburnTPvSmAY.increaseAllowance.call(addressJbDVP3s, uintOuDLd2, {from: accounts[0]});

		await expect(WeedburnTPvSmAY.burnFrom.call(addresso9sGN6b, uintej79Ohs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnZ6q4iIg = await Weedburn.new({from: accounts[2]});
		const uintELz9zPn = BigInt("687")
		const addressBJM5rB6 = accounts[3]
		const uintDHtJNa3 = BigInt("1678")
		const addressDIKlXms = accounts[3]
		const uintpS9ZnGC = BigInt("1651")
		const addressnKSmDKY = accounts[1]
		const stringBm5ID6 = await WeedburnZ6q4iIg.symbol.call({from: accounts[4]});
//		const boolSnYhQ2S = await WeedburnZ6q4iIg.decreaseAllowance.call(addressBJM5rB6, uintELz9zPn, {from: accounts[0]});
//		const addressQV1fPXY = await WeedburnZ6q4iIg.burnFrom.call(addressDIKlXms, uintDHtJNa3, {from: accounts[5]});
//		const boolDLOQPbK = await WeedburnZ6q4iIg.increaseAllowance.call(addressnKSmDKY, uintpS9ZnGC, {from: accounts[1]});
//		const uint256O2BXHIx = await WeedburnZ6q4iIg.totalSupply.call({from: accounts[3]});

		assert.equal(stringBm5ID6, "Weedburn")
		await expect(WeedburnZ6q4iIg.decreaseAllowance.call(addressBJM5rB6, uintELz9zPn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uintivfgHm7 = BigInt("1635")
		const addresslCx0vVj = accounts[0]
		const addressFa2SE8Y = accounts[0]
		const uintcNtvCKd = BigInt("1250")
		const addressc311eB = accounts[1]
//		await WeedburnTPvSmAY.disableDevMode.call({from: accounts[1]});
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addressFa2SE8Y, addresslCx0vVj, uintivfgHm7, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDNXxchX = await WeedburnTPvSmAY.approve.call(addressc311eB, uintcNtvCKd, {from: accounts[1]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[5]});

		await expect(WeedburnTPvSmAY.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwbopBAS = await Weedburn.new({from: accounts[4]});
		const addressHeCEhy8 = accounts[0]
		const addressVdHKfVW = accounts[1]
		const uintYxDCxU = BigInt("1861")
		const addressWmFQZBc = "0x0000000000000000000000000000000000000001"
		const uint256z0ZV5c = await WeedburnwbopBAS.balanceOf.call(addressHeCEhy8, {from: accounts[0]});
		const uint256UU1yVss = await WeedburnwbopBAS.balanceOf.call(addressVdHKfVW, {from: "0x0000000000000000000000000000000000000001"});
//		await WeedburnwbopBAS.enableDevMode.call({from: accounts[3]});
//		const addresskX6Pcjk = await WeedburnwbopBAS.burnFrom.call(addressWmFQZBc, uintYxDCxU, {from: accounts[0]});
//		const uint256T3nOwxh = await WeedburnwbopBAS.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256UU1yVss, BigInt("0"))
		assert.equal(uint256z0ZV5c, BigInt("0"))
		await expect(WeedburnwbopBAS.enableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uintcVfSVtR = BigInt("76")
		const addressPxzqXHL = "0x0000000000000000000000000000000000000001"
		const uintIF5f8Rx = BigInt("1635")
		const addressG4RNrGb = accounts[0]
		const addressOOcsNfc = accounts[0]
		const uintYqXdaxn = BigInt("1481")
		const uintlrVKi2L = BigInt("1408")
		const addressTCBPbb6 = accounts[3]
		const uintiAF5wHY = BigInt("229")
		const addressW4PAD2Y = accounts[1]
		const boolXKMObRo = await WeedburnTPvSmAY.increaseAllowance.call(addressPxzqXHL, uintcVfSVtR, {from: accounts[0]});
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addressOOcsNfc, addressG4RNrGb, uintIF5f8Rx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YT0uRxa = await WeedburnTPvSmAY.burn.call(uintYqXdaxn, {from: accounts[4]});
//		const booloOTAuOP = await WeedburnTPvSmAY.decreaseAllowance.call(addressTCBPbb6, uintlrVKi2L, {from: accounts[4]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[3]});
//		await WeedburnTPvSmAY.disableLimitMode.call({from: accounts[1]});
//		const boolTOwQg2n = await WeedburnTPvSmAY.increaseAllowance.call(addressW4PAD2Y, uintiAF5wHY, {from: accounts[1]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[5]});

		assert.equal(boolXKMObRo, true)
		await expect(WeedburnTPvSmAY.transferFrom.call(addressOOcsNfc, addressG4RNrGb, uintIF5f8Rx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uintuOghB2 = BigInt("1635")
		const addresscgJo3qn = accounts[1]
		const addressINrYT7n = accounts[0]
		const uintheTHc3h = BigInt("438")
//		await WeedburnTPvSmAY.disableLimitMode.call({from: accounts[0]});
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addressINrYT7n, addresscgJo3qn, uintuOghB2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YT0uRxa = await WeedburnTPvSmAY.burn.call(uintheTHc3h, {from: accounts[4]});
//		await WeedburnTPvSmAY.disableLimitMode.call({from: accounts[1]});
//		await WeedburnTPvSmAY.enableLimitMode.call({from: accounts[5]});

		await expect(WeedburnTPvSmAY.disableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const addressbHJsEQp = accounts[2]
		const addressH7hLlbY = accounts[2]
		const uintk1zyf0T = BigInt("1635")
		const addressPft792s = accounts[1]
		const addressIyL5LXM = accounts[0]
		const uint256SA1WXS5 = await WeedburnTPvSmAY.allowance.call(addressH7hLlbY, addressbHJsEQp, {from: accounts[0]});
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addressIyL5LXM, addressPft792s, uintk1zyf0T, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256SA1WXS5, BigInt("0"))
		await expect(WeedburnTPvSmAY.transferFrom.call(addressIyL5LXM, addressPft792s, uintk1zyf0T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnxgzUoME = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsjymrw2 = BigInt("1909")
		const addressXzNk56y = "0x0000000000000000000000000000000000000001"
		const uintCfjAJN0 = BigInt("1243")
		const addresspc0DTJq = accounts[1]
		const uintgeHf5DJ = BigInt("1270")
		const addressOCaV6G0 = accounts[0]
		const address8IipCD = accounts[0]
		const boolND9wZ9h = await WeedburnxgzUoME.approve.call(addressXzNk56y, uintsjymrw2, {from: accounts[4]});
		const addressVPaKy4V = await WeedburnxgzUoME.burnFrom.call(addresspc0DTJq, uintCfjAJN0, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnxgzUoME.disableDevMode.call({from: accounts[0]});
		const boolfhz8gLL = await WeedburnxgzUoME.transferFrom.call(address8IipCD, addressOCaV6G0, uintgeHf5DJ, {from: accounts[4]});
		await WeedburnxgzUoME.disableLimitMode.call({from: accounts[5]});
	});

	it('test for Weedburn', async () => {
		const WeedburnTPvSmAY = await Weedburn.new({from: accounts[0]});
		const uintC6ncm4Y = BigInt("1391")
		const addressnRUILNr = accounts[1]
		const addressiL5mJ3E = accounts[0]
		const stringBPCjwj = await WeedburnTPvSmAY.name.call({from: accounts[1]});
//		const boolh2AwA3j = await WeedburnTPvSmAY.transferFrom.call(addressiL5mJ3E, addressnRUILNr, uintC6ncm4Y, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8mBlZ0kb = await WeedburnTPvSmAY.decimals.call({from: accounts[2]});

		assert.equal(stringBPCjwj, "t.me/burnweed1")
		await expect(WeedburnTPvSmAY.transferFrom.call(addressiL5mJ3E, addressnRUILNr, uintC6ncm4Y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnnRgU1FZ = await Weedburn.new({from: accounts[3]});
		const addressz1taUCK = accounts[0]
		const uintAIYSKsK = BigInt("281")
		const addressaNTKTPp = "0x0000000000000000000000000000000000000001"
		const addressNf3rsJ9 = accounts[0]
		const addressdjaaBaB = accounts[1]
		const uintDslfm8W = BigInt("845")
		const uint256tbXRuGR = await WeedburnnRgU1FZ.balanceOf.call(addressz1taUCK, {from: accounts[4]});
		const boolycJUWp8 = await WeedburnnRgU1FZ.approve.call(addressaNTKTPp, uintAIYSKsK, {from: accounts[5]});
		const uint256kY1nJYz = await WeedburnnRgU1FZ.allowance.call(addressdjaaBaB, addressNf3rsJ9, {from: accounts[2]});
//		await WeedburnnRgU1FZ.enableDevMode.call({from: accounts[0]});
//		const uint8GssGj56 = await WeedburnnRgU1FZ.decimals.call({from: accounts[3]});
//		const uint256Eth6Bri = await WeedburnnRgU1FZ.burn.call(uintDslfm8W, {from: accounts[3]});

		assert.equal(boolycJUWp8, true)
		assert.equal(uint256kY1nJYz, BigInt("0"))
		assert.equal(uint256tbXRuGR, BigInt("0"))
		await expect(WeedburnnRgU1FZ.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJMQsz51 = await Weedburn.new({from: accounts[0]});
		const uintLzRNtZB = BigInt("124")
		const addressuk7Xdio = accounts[2]
		const uintVH3zb3t = BigInt("974")
		const addressvFx7qw = accounts[3]
		const uintOPKPegn = BigInt("603")
		const addressHkkTcuo = accounts[3]
		const uintdXoJbYj = BigInt("1800")
		const addressJ2ldz5n = accounts[1]
		const uint256mUTETRF = await WeedburnJMQsz51.totalSupply.call({from: accounts[5]});
//		const address1ZXfDw = await WeedburnJMQsz51.burnFrom.call(addressuk7Xdio, uintLzRNtZB, {from: accounts[0]});
//		const booldoPpGVm = await WeedburnJMQsz51.approve.call(addressvFx7qw, uintVH3zb3t, {from: accounts[2]});
//		const boolMNNqN7p = await WeedburnJMQsz51.approve.call(addressHkkTcuo, uintOPKPegn, {from: accounts[1]});
//		const boolQr6aiI = await WeedburnJMQsz51.approve.call(addressJ2ldz5n, uintdXoJbYj, {from: accounts[4]});

		assert.equal(uint256mUTETRF, BigInt("100000000000000000000000"))
		await expect(WeedburnJMQsz51.burnFrom.call(addressuk7Xdio, uintLzRNtZB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})