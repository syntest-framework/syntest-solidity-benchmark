const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressND5k3gn = accounts[4]
		const uintzTpaZye = BigInt("1819")
		const DatrixoEquityTokenyUJGOeB = await DatrixoEquityToken.new(addressND5k3gn, uintzTpaZye, {from: accounts[3]});
		const addressDdJ8rJJ = accounts[1]
		const addressUWkSIfa = accounts[4]
		const uintFISXdgR = BigInt("1686")
		const addressotHDLSj = accounts[1]
		const addressBdM7ZG0 = accounts[4]
		const uintQvixV9 = BigInt("110")
		const addressO5ulLEv = accounts[0]
		const addressVPFpsla = accounts[2]
		const addressdaJtcfp = accounts[0]
//		await DatrixoEquityTokenyUJGOeB.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolH0resAE = await DatrixoEquityTokenyUJGOeB.removeShareholder.call(addressDdJ8rJJ, {from: accounts[0]});
//		const boolpz0v1c2 = await DatrixoEquityTokenyUJGOeB.removeShareholder.call(addressUWkSIfa, {from: accounts[5]});
//		const boolWM59ei2 = await DatrixoEquityTokenyUJGOeB.transferFrom.call(addressBdM7ZG0, addressotHDLSj, uintFISXdgR, {from: accounts[1]});
//		const boolA33DkzY = await DatrixoEquityTokenyUJGOeB.transferFrom.call(addressVPFpsla, addressO5ulLEv, uintQvixV9, {from: accounts[5]});
//		const boolqsBGST = await DatrixoEquityTokenyUJGOeB.removeShareholder.call(addressdaJtcfp, {from: accounts[4]});

		await expect(DatrixoEquityTokenyUJGOeB.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswa2ebwW = accounts[4]
		const uintth7G0Y2 = BigInt("1466")
		const DatrixoEquityTokenQ98lk13 = await DatrixoEquityToken.new(addresswa2ebwW, uintth7G0Y2, {from: accounts[0]});
		const uintXd0RDOD = BigInt("648")
		const addresslaGKJfw = accounts[3]
		const addressCHHonl = accounts[3]
		const uinti3NXpse = BigInt("1072")
		const addressBOxUQd = accounts[0]
		const uintRGIyiau = BigInt("734")
		const addressarrayTwRK55Z = await DatrixoEquityTokenQ98lk13.getShareholdersArray.call({from: accounts[4]});
//		const boolWwWlDM = await DatrixoEquityTokenQ98lk13.transferFrom.call(addressCHHonl, addresslaGKJfw, uintXd0RDOD, {from: accounts[2]});
//		const boolarRSw2I = await DatrixoEquityTokenQ98lk13.transfer.call(addressBOxUQd, uinti3NXpse, {from: accounts[5]});
//		const uintVgUkknh = await DatrixoEquityTokenQ98lk13.setStart.call(uintRGIyiau, {from: accounts[3]});
//		await DatrixoEquityTokenQ98lk13.afterStartTime.call({from: accounts[2]});

		assert.equal(addressarrayTwRK55Z, )
		await expect(DatrixoEquityTokenQ98lk13.transferFrom.call(addressCHHonl, addresslaGKJfw, uintXd0RDOD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresst6CDz8b = accounts[0]
		const uintUxeSUNY = BigInt("314")
		const DatrixoEquityTokenXdswrhJ = await DatrixoEquityToken.new(addresst6CDz8b, uintUxeSUNY, {from: "0x0000000000000000000000000000000000000001"});
		const uintEo1Qe3K = BigInt("1618")
		const addresscHfJak = accounts[3]
		const addressLkx0Mgd = accounts[2]
		const uintyaBjkUD = await DatrixoEquityTokenXdswrhJ.setStart.call(uintEo1Qe3K, {from: accounts[4]});
		const boolOSXCbj0 = await DatrixoEquityTokenXdswrhJ.removeShareholder.call(addresscHfJak, {from: accounts[0]});
		const boolxpZJvTg = await DatrixoEquityTokenXdswrhJ.removeShareholder.call(addressLkx0Mgd, {from: accounts[2]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressuowzEO = accounts[3]
		const uintEdgfn4Z = BigInt("1287")
		const DatrixoEquityTokenuDoThWj = await DatrixoEquityToken.new(addressuowzEO, uintEdgfn4Z, {from: accounts[0]});
		const uintOaqPZ1e = BigInt("1859")
		const addressgYth69 = accounts[3]
		const addresseGRiBKh = accounts[3]
		const addressZDtxzSP = accounts[5]
		const boolRX7jQmW = await DatrixoEquityTokenuDoThWj.transferFrom.call(addresseGRiBKh, addressgYth69, uintOaqPZ1e, {from: accounts[3]});
//		const boolMDKD6ha = await DatrixoEquityTokenuDoThWj.removeShareholder.call(addressZDtxzSP, {from: accounts[2]});
//		const addressarrays9KdEU = await DatrixoEquityTokenuDoThWj.getShareholdersArray.call({from: accounts[3]});

		assert.equal(boolRX7jQmW, true)
		await expect(DatrixoEquityTokenuDoThWj.removeShareholder.call(addressZDtxzSP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressxWKVGeU = accounts[3]
		const uintInl1jp = BigInt("1287")
		const DatrixoEquityTokenuDoThWj = await DatrixoEquityToken.new(addressxWKVGeU, uintInl1jp, {from: accounts[0]});
		const uintKyGIjIq = BigInt("1859")
		const addressCYTEHOD = accounts[3]
		const addressIQW5Ggn = accounts[0]
//		const boolRX7jQmW = await DatrixoEquityTokenuDoThWj.transferFrom.call(addressIQW5Ggn, addressCYTEHOD, uintKyGIjIq, {from: accounts[3]});
//		const addressarrays9KdEU = await DatrixoEquityTokenuDoThWj.getShareholdersArray.call({from: accounts[3]});

		await expect(DatrixoEquityTokenuDoThWj.transferFrom.call(addressIQW5Ggn, addressCYTEHOD, uintKyGIjIq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressG2AbyFx = accounts[2]
		const uintARCBp9W = BigInt("195")
		const DatrixoEquityTokenC9Eox4y = await DatrixoEquityToken.new(addressG2AbyFx, uintARCBp9W, {from: accounts[1]});
		const addressPXfZysr = accounts[1]
//		const booloAi5ggx = await DatrixoEquityTokenC9Eox4y.removeShareholder.call(addressPXfZysr, {from: accounts[2]});
//		await DatrixoEquityTokenC9Eox4y.onlyOwner.call({from: accounts[3]});

		await expect(DatrixoEquityTokenC9Eox4y.removeShareholder.call(addressPXfZysr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressgAeME7 = accounts[3]
		const uintOjy4yFj = BigInt("1287")
		const DatrixoEquityTokenuDoThWj = await DatrixoEquityToken.new(addressgAeME7, uintOjy4yFj, {from: accounts[0]});
		const uintX8dUZOK = BigInt("1859")
		const addressUrsSl73 = accounts[4]
		const addressAFKB3Jo = accounts[3]
		const uintGwZCWbz = BigInt("150")
		const addressZWxgpO = accounts[0]
		const boolRX7jQmW = await DatrixoEquityTokenuDoThWj.transferFrom.call(addressAFKB3Jo, addressUrsSl73, uintX8dUZOK, {from: accounts[3]});
		const addressarrays9KdEU = await DatrixoEquityTokenuDoThWj.getShareholdersArray.call({from: accounts[3]});
		const boolajnKbu = await DatrixoEquityTokenuDoThWj.transfer.call(addressZWxgpO, uintGwZCWbz, {from: accounts[3]});
//		await DatrixoEquityTokenuDoThWj.onlyOwner.call({from: accounts[1]});

		assert.equal(addressarrays9KdEU, )
		assert.equal(boolRX7jQmW, true)
		assert.equal(boolajnKbu, true)
		await expect(DatrixoEquityTokenuDoThWj.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressxQG9URk = accounts[2]
		const uintzhaybjb = BigInt("195")
		const DatrixoEquityTokenC9Eox4y = await DatrixoEquityToken.new(addressxQG9URk, uintzhaybjb, {from: accounts[1]});
		const uintAuhwAno = BigInt("1141")
		const addressL7tEGYH = accounts[2]
		const uintz8jem3d = BigInt("695")
		const addressLZny883 = accounts[1]
		const addressQJOEBz = accounts[1]
		const uintLTtjfJt = BigInt("1528")
		const addressAADU0za = accounts[2]
		const addressDwSYpYk = accounts[1]
//		const uintjyscTZe = await DatrixoEquityTokenC9Eox4y.setStart.call(uintAuhwAno, {from: accounts[2]});
//		const booloAi5ggx = await DatrixoEquityTokenC9Eox4y.removeShareholder.call(addressL7tEGYH, {from: accounts[2]});
//		const boola8722yF = await DatrixoEquityTokenC9Eox4y.transfer.call(addressLZny883, uintz8jem3d, {from: accounts[1]});
//		const boolHwh0m7j = await DatrixoEquityTokenC9Eox4y.removeShareholder.call(addressQJOEBz, {from: accounts[1]});
//		const boolNTSx5zf = await DatrixoEquityTokenC9Eox4y.transferFrom.call(addressDwSYpYk, addressAADU0za, uintLTtjfJt, {from: accounts[0]});
//		await DatrixoEquityTokenC9Eox4y.onlyOwner.call({from: accounts[3]});

		await expect(DatrixoEquityTokenC9Eox4y.setStart.call(uintAuhwAno, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressq9O08nn = accounts[2]
		const uintSt2mnPY = BigInt("195")
		const DatrixoEquityTokenC9Eox4y = await DatrixoEquityToken.new(addressq9O08nn, uintSt2mnPY, {from: accounts[1]});
		const uintjCrQaFY = BigInt("1397")
		const addressmJa7apS = accounts[2]
		const addressoZxMvQf = accounts[5]
//		const boolrX24O8z = await DatrixoEquityTokenC9Eox4y.transfer.call(addressmJa7apS, uintjCrQaFY, {from: accounts[2]});
//		const booloAi5ggx = await DatrixoEquityTokenC9Eox4y.removeShareholder.call(addressoZxMvQf, {from: accounts[2]});

		await expect(DatrixoEquityTokenC9Eox4y.transfer.call(addressmJa7apS, uintjCrQaFY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})