const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringFWFM7GX = "eYnYtGXytJhrFjY2BsvlKl95qE5HQW6T4cW8AptlBrsfLmlzmmzyTf"
		const stringTbe3JMh = "WfqpYlXXDGJ9"
		const uintvBRfcAl = BigInt("230")
		const DSP1TVeWK = await DSP.new(stringFWFM7GX, stringTbe3JMh, uintvBRfcAl, {from: accounts[2]});
		const uintiBftNRq = BigInt("1529")
		const uintkVUnbP8 = BigInt("1523")
		const addressHRue1me = accounts[2]
		const addressPaNTcT3 = accounts[3]
		const uintxdVcrjc = BigInt("92")
		const addressZAs99p3 = accounts[1]
		const addressuZK4q4 = accounts[3]
		const uintoAAVir8 = BigInt("726")
		const addresskJIIyCG = accounts[3]
		const uintwE9uklF = BigInt("1638")
		const addressrPTpkHH = accounts[1]
		const boolE1Dpi9k = await DSP1TVeWK.lock.call(addressHRue1me, uintkVUnbP8, uintiBftNRq, {from: accounts[1]});
		const addressS8v05Pq = await DSP1TVeWK.upgradeTo.call(addressPaNTcT3, {from: accounts[3]});
		const boolGZOVigN = await DSP1TVeWK.transferFrom.call(addressuZK4q4, addressZAs99p3, uintxdVcrjc, {from: accounts[4]});
		const bool7YLPKc = await DSP1TVeWK.transfer.call(addresskJIIyCG, uintoAAVir8, {from: accounts[0]});
		const stringrwsF6w7 = await DSP1TVeWK.name.call({from: accounts[3]});
		const booltolZ2oP = await DSP1TVeWK.decreaseAllowance.call(addressrPTpkHH, uintwE9uklF, {from: accounts[5]});
	});

	it('test for DSP', async () => {
		const DSPBjalWfm = await DSP.new({from: accounts[2]});
		const addressofvQBQo = "0x0000000000000000000000000000000000000001"
		const uintAHF63oU = BigInt("591")
		const addressrn6U1So = accounts[0]
//		const addressErzWlr = await DSPBjalWfm.removePauser.call(addressofvQBQo, {from: "0x0000000000000000000000000000000000000001"});
//		await DSPBjalWfm.unpause.call({from: accounts[3]});
//		const boolJTSwxl = await DSPBjalWfm.decreaseAllowance.call(addressrn6U1So, uintAHF63oU, {from: accounts[3]});

		await expect(DSPBjalWfm.removePauser.call(addressofvQBQo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPg5zQigL = await DSP.new({from: accounts[1]});
		const uintqSmUtbM = BigInt("1896")
		const uintdrzD6JB = BigInt("1514")
		const addressDTJTM9w = accounts[2]
		const uintJJpexbc = BigInt("1948")
		const addressJn5FKQg = accounts[1]
		const addressgTIlFs7 = "0x0000000000000000000000000000000000000001"
		const addressOErY6at = accounts[1]
		const uintD1ohaf = BigInt("319")
		const addressG4IHJm3 = accounts[0]
//		const booloX7N0ls = await DSPg5zQigL.transferWithLock.call(addressDTJTM9w, uintdrzD6JB, uintqSmUtbM, {from: accounts[3]});
//		const uint8CNWLSPJ = await DSPg5zQigL.decimals.call({from: accounts[2]});
//		const boolXrmzdTR = await DSPg5zQigL.paused.call({from: accounts[1]});
//		const boolehbJv1d = await DSPg5zQigL.transferFrom.call(addressgTIlFs7, addressJn5FKQg, uintJJpexbc, {from: accounts[2]});
//		const addressuCerAf6 = await DSPg5zQigL.removePauser.call(addressOErY6at, {from: "0x0000000000000000000000000000000000000001"});
//		const booli5owr8p = await DSPg5zQigL.mint.call(addressG4IHJm3, uintD1ohaf, {from: accounts[3]});

		await expect(DSPg5zQigL.transferWithLock.call(addressDTJTM9w, uintdrzD6JB, uintqSmUtbM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP8pso11 = await DSP.new({from: accounts[5]});
//		await DSP8pso11.whenNotPaused.call({from: accounts[3]});
//		const booljbawya2 = await DSP8pso11.acceptOwnership.call({from: accounts[4]});

		await expect(DSP8pso11.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const uintmzA2uiB = BigInt("1327")
		const addressw5uHOsy = accounts[3]
		const addressgF0LHa = accounts[2]
		const uintcvP5iGb = BigInt("1722")
		const uintpD3XBj6 = BigInt("1436")
		const addressj7KLsan = accounts[5]
		const addressDgx6Myu = accounts[2]
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addressgF0LHa, addressw5uHOsy, uintmzA2uiB, {from: accounts[3]});
//		const boolJukV4w3 = await DSPPIj667q.lock.call(addressj7KLsan, uintpD3XBj6, uintcvP5iGb, {from: accounts[0]});
//		const uint8lAwBlgI = await DSPPIj667q.decimals.call({from: accounts[3]});
//		await DSPPIj667q.renouncePauser.call({from: accounts[0]});
//		const addresshGmv4wV = await DSPPIj667q.addPauser.call(addressDgx6Myu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPPIj667q.transferFrom.call(addressgF0LHa, addressw5uHOsy, uintmzA2uiB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const uintj5Ml9mB = BigInt("1722")
		const uintWzYyvud = BigInt("1436")
		const addressks2ZzOK = accounts[5]
		const addresssRmoEXK = accounts[2]
//		const boolJukV4w3 = await DSPPIj667q.lock.call(addressks2ZzOK, uintWzYyvud, uintj5Ml9mB, {from: accounts[0]});
//		const uint8lAwBlgI = await DSPPIj667q.decimals.call({from: accounts[3]});
//		await DSPPIj667q.renouncePauser.call({from: accounts[0]});
//		const addresshGmv4wV = await DSPPIj667q.addPauser.call(addresssRmoEXK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPPIj667q.lock.call(addressks2ZzOK, uintWzYyvud, uintj5Ml9mB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPUh7EdXV = await DSP.new({from: accounts[0]});
		const uintnUyrqn2 = BigInt("97")
		const addressnuZlYdF = accounts[3]
		const uintdkbhFZ8 = BigInt("266")
		const addressTL9Z96 = accounts[4]
		const addressmq5LS79 = accounts[3]
		const addressKhZdNYQ = accounts[4]
//		const boolwXAvRkY = await DSPUh7EdXV.unlock.call(addressnuZlYdF, uintnUyrqn2, {from: accounts[0]});
//		await DSPUh7EdXV.onlyNewOwner.call({from: accounts[3]});
//		const boolYtD7Emt = await DSPUh7EdXV.increaseAllowance.call(addressTL9Z96, uintdkbhFZ8, {from: accounts[1]});
//		const boolIuSTIg = await DSPUh7EdXV.unfreezeAccount.call(addressmq5LS79, {from: accounts[4]});
//		const addressvbRRuCR = await DSPUh7EdXV.notFrozen.call(addressKhZdNYQ, {from: accounts[1]});

		await expect(DSPUh7EdXV.unlock.call(addressnuZlYdF, uintnUyrqn2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addressDqLScTw = accounts[3]
		const uintUvdrCwY = BigInt("1340")
		const addressrbHtNlI = accounts[3]
		const addressGkwtAmK = accounts[2]
		const addressCR9zpq6 = accounts[2]
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addressDqLScTw, {from: accounts[5]});
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addressGkwtAmK, addressrbHtNlI, uintUvdrCwY, {from: accounts[3]});
//		const addresshGmv4wV = await DSPPIj667q.addPauser.call(addressCR9zpq6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256TBKEZeh, BigInt("0"))
		await expect(DSPPIj667q.transferFrom.call(addressGkwtAmK, addressrbHtNlI, uintUvdrCwY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPSC69UPa = await DSP.new({from: accounts[3]});
		const uintDOqLwbJ = BigInt("446")
		const addressaN5kUh = accounts[1]
		const uintT94SEM0 = BigInt("1306")
		const addressvdxPyf = accounts[4]
		const addressVazSotz = accounts[0]
		const stringz81u9p3 = await DSPSC69UPa.symbol.call({from: accounts[1]});
//		const bool2zw5oK = await DSPSC69UPa.decreaseAllowance.call(addressaN5kUh, uintDOqLwbJ, {from: accounts[0]});
//		const boolM887OsH = await DSPSC69UPa.transferFrom.call(addressVazSotz, addressvdxPyf, uintT94SEM0, {from: accounts[3]});

		assert.equal(stringz81u9p3, "DSP")
		await expect(DSPSC69UPa.decreaseAllowance.call(addressaN5kUh, uintDOqLwbJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addresss1tz2zZ = accounts[3]
		const uint2COnqA = BigInt("1340")
		const addressPR0Tbpt = accounts[4]
		const addressKsW7IOI = accounts[2]
		const uintMn6Kc6V = BigInt("1988")
		const addressDLPx6dJ = accounts[3]
		const addressZRxADjj = accounts[1]
		const uint8AP7iFKH = await DSPPIj667q.decimals.call({from: accounts[2]});
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addresss1tz2zZ, {from: accounts[5]});
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addressKsW7IOI, addressPR0Tbpt, uint2COnqA, {from: accounts[3]});
//		const boolnzWoIGG = await DSPPIj667q.transferFrom.call(addressZRxADjj, addressDLPx6dJ, uintMn6Kc6V, {from: accounts[2]});
//		await DSPPIj667q.renouncePauser.call({from: accounts[4]});

		assert.equal(uint256TBKEZeh, BigInt("0"))
		assert.equal(uint8AP7iFKH, BigInt("18"))
		await expect(DSPPIj667q.transferFrom.call(addressKsW7IOI, addressPR0Tbpt, uint2COnqA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addresspeycYFT = accounts[4]
		const uinttZR4v6a = BigInt("937")
		const addressKIynR9y = accounts[0]
		const uintP9RBQKx = BigInt("1340")
		const addressRJgAPsk = accounts[3]
		const addresso2Q8ksZ = accounts[2]
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addresspeycYFT, {from: accounts[5]});
		const boolX4klPNL = await DSPPIj667q.increaseAllowance.call(addressKIynR9y, uinttZR4v6a, {from: accounts[0]});
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addresso2Q8ksZ, addressRJgAPsk, uintP9RBQKx, {from: accounts[3]});

		assert.equal(boolX4klPNL, true)
		assert.equal(uint256TBKEZeh, BigInt("0"))
		await expect(DSPPIj667q.transferFrom.call(addresso2Q8ksZ, addressRJgAPsk, uintP9RBQKx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const uintDW8N1Qg = BigInt("1782")
		const addresswSFWDX = accounts[3]
		const uintW8BBYFa = BigInt("1327")
		const addressw0PjfTY = accounts[3]
		const addressfI8rAHU = accounts[2]
		const addresslVOf3Z = accounts[3]
		const uinty5vtQ1l = BigInt("1158")
		const addresswgzBrO = accounts[0]
		const addressu9V14Dl = accounts[0]
//		const boolcWf7JwB = await DSPPIj667q.transfer.call(addresswSFWDX, uintDW8N1Qg, {from: accounts[1]});
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addressfI8rAHU, addressw0PjfTY, uintW8BBYFa, {from: accounts[3]});
//		const addressTCsViE5 = await DSPPIj667q.upgradeTo.call(addresslVOf3Z, {from: accounts[1]});
//		const boolGtSv5Jl = await DSPPIj667q.transferFrom.call(addressu9V14Dl, addresswgzBrO, uinty5vtQ1l, {from: accounts[0]});

		await expect(DSPPIj667q.transfer.call(addresswSFWDX, uintDW8N1Qg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addressGyrLtkK = accounts[4]
		const addresss5SF4kz = accounts[0]
		const addressk6sol3Y = accounts[1]
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addressGyrLtkK, {from: accounts[5]});
		const uint2563MD5w0 = await DSPPIj667q.allowance.call(addressk6sol3Y, addresss5SF4kz, {from: accounts[4]});

		assert.equal(uint2563MD5w0, BigInt("0"))
		assert.equal(uint256TBKEZeh, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addressyNp6vaa = accounts[3]
		const uintBYyHEEV = BigInt("1327")
		const addressGt0CESg = accounts[4]
		const addressNe2OKWm = accounts[2]
		const uintJdyZ0lv = BigInt("964")
		const uinthnbfVkS = BigInt("267")
		const addressR5TVl18 = accounts[3]
		const stringYY9pG8x = await DSPPIj667q.name.call({from: accounts[1]});
//		const addressXihEW9W = await DSPPIj667q.upgradeTo.call(addressyNp6vaa, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addressNe2OKWm, addressGt0CESg, uintBYyHEEV, {from: accounts[3]});
//		const boolpfHAMDN = await DSPPIj667q.transferWithLock.call(addressR5TVl18, uinthnbfVkS, uintJdyZ0lv, {from: accounts[4]});

		assert.equal(stringYY9pG8x, "DSP")
		await expect(DSPPIj667q.upgradeTo.call(addressyNp6vaa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPz03zpIj = await DSP.new({from: accounts[3]});
		const addresspKSzJ7b = accounts[2]
//		await DSPz03zpIj.renouncePauser.call({from: accounts[3]});
//		const addressFkTqoDh = await DSPz03zpIj.removePauser.call(addresspKSzJ7b, {from: accounts[2]});
//		await DSPz03zpIj.onlyPauser.call({from: accounts[2]});
//		await DSPz03zpIj.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPz03zpIj.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addressus8F1Xo = accounts[3]
		const uintvSORaXa = BigInt("1736")
		const addressY6MudeS = accounts[1]
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addressus8F1Xo, {from: accounts[5]});
		const boolebwFr5u = await DSPPIj667q.approve.call(addressY6MudeS, uintvSORaXa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolebwFr5u, true)
		assert.equal(uint256TBKEZeh, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const uinthfs6k5 = BigInt("254")
		const uintBVlFQxs = BigInt("1371")
		const addressOFWE401 = accounts[0]
		const uintJv74Vwh = BigInt("1327")
		const addressFVISirm = accounts[3]
		const addressEooDx0r = accounts[2]
		const uintl3vKvp7 = BigInt("1428")
		const addresspf0djkr = accounts[5]
		const boolxANiHyh = await DSPPIj667q.lock.call(addressOFWE401, uintBVlFQxs, uinthfs6k5, {from: accounts[0]});
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addressEooDx0r, addressFVISirm, uintJv74Vwh, {from: accounts[3]});
//		const booljliZ8lN = await DSPPIj667q.approve.call(addresspf0djkr, uintl3vKvp7, {from: accounts[1]});
//		const boolmk0ILQ = await DSPPIj667q.acceptOwnership.call({from: accounts[5]});

		assert.equal(boolxANiHyh, true)
		await expect(DSPPIj667q.transferFrom.call(addressEooDx0r, addressFVISirm, uintJv74Vwh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const address6vRkly = accounts[4]
		const addressEajXqL7 = accounts[4]
		const boolAHa15jY = await DSPPIj667q.paused.call({from: accounts[2]});
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(address6vRkly, {from: accounts[5]});
		const addressCGxCpkk = await DSPPIj667q.upgradeTo.call(addressEajXqL7, {from: accounts[0]});
//		await DSPPIj667q.whenPaused.call({from: accounts[3]});

		assert.equal(boolAHa15jY, false)
		assert.equal(uint256TBKEZeh, BigInt("0"))
		await expect(DSPPIj667q.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addressLNpp0R = accounts[4]
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addressLNpp0R, {from: accounts[5]});
		const uint256jWmz5F = await DSPPIj667q.totalSupply.call({from: accounts[1]});

		assert.equal(uint256TBKEZeh, BigInt("0"))
		assert.equal(uint256jWmz5F, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const uintMhh9VgP = BigInt("1885")
		const addressUcNvqu3 = accounts[3]
		const uintwH6tdSY = BigInt("1321")
		const addressy923nCQ = accounts[3]
		const addressG3ZW12g = accounts[2]
		const boolCxwNWSs = await DSPPIj667q.mint.call(addressUcNvqu3, uintMhh9VgP, {from: accounts[0]});
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addressG3ZW12g, addressy923nCQ, uintwH6tdSY, {from: accounts[3]});

		assert.equal(boolCxwNWSs, true)
		await expect(DSPPIj667q.transferFrom.call(addressG3ZW12g, addressy923nCQ, uintwH6tdSY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addressx4Ia2oI = accounts[2]
		const addressWnk3Rs0 = accounts[3]
		const addressR1YRn85 = accounts[3]
		const addresshReTb0Z = accounts[2]
		const uint256fWu408k = await DSPPIj667q.allowance.call(addressWnk3Rs0, addressx4Ia2oI, {from: accounts[0]});
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addressR1YRn85, {from: accounts[5]});
		const addressA3IdBsD = await DSPPIj667q.addPauser.call(addresshReTb0Z, {from: accounts[0]});

		assert.equal(uint256TBKEZeh, BigInt("0"))
		assert.equal(uint256fWu408k, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const uintwZwpts = BigInt("1370")
		const uintt3heMS1 = BigInt("1041")
		const addresskRPlOBg = accounts[0]
		const uintI2j3Ava = BigInt("1738")
		const addressZky9LWR = accounts[2]
		const uinttH7VTYN = BigInt("1327")
		const addressKIlnm6z = accounts[3]
		const addressYnlLKj7 = accounts[3]
		const stringfKGEHCP = await DSPPIj667q.name.call({from: accounts[2]});
		const boolse9aKsJ = await DSPPIj667q.transferWithLock.call(addresskRPlOBg, uintt3heMS1, uintwZwpts, {from: accounts[0]});
		const boolmK0kH2o = await DSPPIj667q.mint.call(addressZky9LWR, uintI2j3Ava, {from: accounts[0]});
//		const boolHeZuipD = await DSPPIj667q.transferFrom.call(addressYnlLKj7, addressKIlnm6z, uinttH7VTYN, {from: accounts[3]});

		assert.equal(boolmK0kH2o, true)
		assert.equal(boolse9aKsJ, true)
		assert.equal(stringfKGEHCP, "DSP")
		await expect(DSPPIj667q.transferFrom.call(addressYnlLKj7, addressKIlnm6z, uinttH7VTYN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const uint2cvNXc = BigInt("1307")
		const addressMZeWITt = accounts[1]
		const uintZie9bqN = BigInt("1384")
		const addressKK27Q9H = accounts[4]
//		const bool0JP2Yi = await DSPPIj667q.burnFrombyOwner.call(addressMZeWITt, uint2cvNXc, {from: accounts[0]});
//		const boolnJTeKIP = await DSPPIj667q.transfer.call(addressKK27Q9H, uintZie9bqN, {from: accounts[3]});

		await expect(DSPPIj667q.burnFrombyOwner.call(addressMZeWITt, uint2cvNXc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCjXMB3w = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCXtG7X = accounts[0]
		const addressLHZAI3 = accounts[2]
		const addresspvh67I4 = accounts[4]
		const addresscDlFzB6 = accounts[1]
		const uintcRKwkOy = BigInt("464")
		const addressXiqslVE = accounts[1]
		const addressJEZsZWH = accounts[1]
		const boolYdypYiq = await DSPCjXMB3w.paused.call({from: accounts[4]});
		const boolMSKSiU = await DSPCjXMB3w.unfreezeAccount.call(addressCXtG7X, {from: accounts[3]});
		const uint256sU6RdGZ = await DSPCjXMB3w.allowance.call(addresspvh67I4, addressLHZAI3, {from: accounts[3]});
		const stringpiDLWj2 = await DSPCjXMB3w.name.call({from: accounts[5]});
		const addressP064XOI = await DSPCjXMB3w.upgradeTo.call(addresscDlFzB6, {from: accounts[0]});
		const boolmCXPf89 = await DSPCjXMB3w.transferFrom.call(addressJEZsZWH, addressXiqslVE, uintcRKwkOy, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addresskvCLP6d = accounts[0]
		const addressN1PirW = accounts[0]
		const addressB1rJ6lu = accounts[0]
		const addressvXzR23o = accounts[3]
		const uint256KjuJ0JO = await DSPPIj667q.balanceOf.call(addresskvCLP6d, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jIZSafc = await DSPPIj667q.balanceOf.call(addressN1PirW, {from: accounts[2]});
		const boolqzGCcs3 = await DSPPIj667q.isOwner.call(addressB1rJ6lu, {from: accounts[0]});
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addressvXzR23o, {from: accounts[5]});

		assert.equal(boolqzGCcs3, true)
		assert.equal(uint256KjuJ0JO, BigInt("100000000000000000000000000000"))
		assert.equal(uint256TBKEZeh, BigInt("0"))
		assert.equal(uint256jIZSafc, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPPIj667q = await DSP.new({from: accounts[0]});
		const addressnYiRHnV = accounts[4]
		const addresskjAFkRi = accounts[4]
		const boolCDtwgo = await DSPPIj667q.freezeAccount.call(addressnYiRHnV, {from: accounts[0]});
		const uint256TBKEZeh = await DSPPIj667q.balanceOf.call(addresskjAFkRi, {from: accounts[5]});

		assert.equal(boolCDtwgo, true)
		assert.equal(uint256TBKEZeh, BigInt("0"))
	});
})