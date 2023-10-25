const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdfKKcg = BigInt("1565")
		const BancorV2_ZapIn_General_V1_1iZrahli = await BancorV2_ZapIn_General_V1_1.new(uintdfKKcg, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1iZrahli.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1iZrahli.toggleContractActive.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1iZrahli.onlyOwner.call({from: accounts[0]});
//		const addressM2v5Dhq = await BancorV2_ZapIn_General_V1_1iZrahli.owner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1iZrahli.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUN82MUs = BigInt("1971")
		const BancorV2_ZapIn_General_V1_1K9pmOqe = await BancorV2_ZapIn_General_V1_1.new(uintUN82MUs, {from: accounts[2]});
		const byteqUWZxX = "0x2008060e0212080b1706060412170b010016130115130f091b"
		const addressPSSHvVf = accounts[3]
		const addressmNJpKV = accounts[4]
		const uintOl1uEgI = BigInt("796")
		const uintINxpwl7 = BigInt("1470")
		const addresse37IzF = accounts[3]
		const addressHttkp9z = accounts[2]
		const addressQlWbqI2 = accounts[1]
//		const uint256dHauNhI = await BancorV2_ZapIn_General_V1_1K9pmOqe.ZapInSingleSided.call(addressQlWbqI2, addressHttkp9z, addresse37IzF, uintINxpwl7, uintOl1uEgI, addressmNJpKV, addressPSSHvVf, byteqUWZxX, {from: accounts[3]});
//		const addressetRUlJ7 = await BancorV2_ZapIn_General_V1_1K9pmOqe.owner.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1K9pmOqe.stopInEmergency.call({from: accounts[1]});
//		const boolsHXq4Ha = await BancorV2_ZapIn_General_V1_1K9pmOqe.isOwner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1K9pmOqe.ZapInSingleSided.call(addressQlWbqI2, addressHttkp9z, addresse37IzF, uintINxpwl7, uintOl1uEgI, addressmNJpKV, addressPSSHvVf, byteqUWZxX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintangOgOR = BigInt("1040")
		const BancorV2_ZapIn_General_V1_1tB87rX3 = await BancorV2_ZapIn_General_V1_1.new(uintangOgOR, {from: "0x0000000000000000000000000000000000000001"});
		const uintwCvb5r2 = BigInt("790")
		const addressUpZg8y0 = accounts[2]
		const addressRyUH0HU = accounts[4]
		const uint16ZkJmdR2 = await BancorV2_ZapIn_General_V1_1tB87rX3.set_new_goodwill.call(uintwCvb5r2, {from: accounts[1]});
		const addressItH0TB = await BancorV2_ZapIn_General_V1_1tB87rX3.toPayable.call(addressUpZg8y0, {from: "0x0000000000000000000000000000000000000001"});
		const addressixanb2b = await BancorV2_ZapIn_General_V1_1tB87rX3.inCaseTokengetsStuck.call(addressRyUH0HU, {from: accounts[5]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintXnpvYDj = BigInt("224")
		const BancorV2_ZapIn_General_V1_1YARLUX7 = await BancorV2_ZapIn_General_V1_1.new(uintXnpvYDj, {from: accounts[3]});
		const uintPPB0MTn = BigInt("1338")
		const addressNkvDt5d = accounts[3]
		const addressbYUTLtU = accounts[0]
//		const uint16aQ1oBMV = await BancorV2_ZapIn_General_V1_1YARLUX7.set_new_goodwill.call(uintPPB0MTn, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1YARLUX7.nonReentrant.call({from: accounts[3]});
//		const addressnMNPJix = await BancorV2_ZapIn_General_V1_1YARLUX7.inCaseTokengetsStuck.call(addressNkvDt5d, {from: accounts[5]});
//		const addressoNKUGs = await BancorV2_ZapIn_General_V1_1YARLUX7.toPayable.call(addressbYUTLtU, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YARLUX7.set_new_goodwill.call(uintPPB0MTn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintk4fItg = BigInt("123")
		const BancorV2_ZapIn_General_V1_1fGCqIq = await BancorV2_ZapIn_General_V1_1.new(uintk4fItg, {from: accounts[1]});
		const uintmQlWt8u = BigInt("1814")
		const addressQ0WNvxe = accounts[1]
		const uint16aIi9wdf = await BancorV2_ZapIn_General_V1_1fGCqIq.set_new_goodwill.call(uintmQlWt8u, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1fGCqIq.withdraw.call({from: accounts[2]});
//		const addressMuRvagu = await BancorV2_ZapIn_General_V1_1fGCqIq.inCaseTokengetsStuck.call(addressQ0WNvxe, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1fGCqIq.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintiWPvomr = BigInt("1757")
		const BancorV2_ZapIn_General_V1_1G83ERXG = await BancorV2_ZapIn_General_V1_1.new(uintiWPvomr, {from: accounts[0]});
		const addressLUsDHR = accounts[3]
		const uintjfIiEF9 = BigInt("1421")
		const addressT4Ja4VH = "0x0000000000000000000000000000000000000001"
//		const addressQbapZbr = await BancorV2_ZapIn_General_V1_1G83ERXG.inCaseTokengetsStuck.call(addressLUsDHR, {from: accounts[0]});
//		const uint16tUiG46n = await BancorV2_ZapIn_General_V1_1G83ERXG.set_new_goodwill.call(uintjfIiEF9, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1G83ERXG.stopInEmergency.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1G83ERXG.nonReentrant.call({from: accounts[0]});
//		const booljQhfpFk = await BancorV2_ZapIn_General_V1_1G83ERXG.isOwner.call({from: accounts[3]});
//		const addressCRawpTI = await BancorV2_ZapIn_General_V1_1G83ERXG.toPayable.call(addressT4Ja4VH, {from: accounts[2]});
//		const addressx9fZ5Sk = await BancorV2_ZapIn_General_V1_1G83ERXG.owner.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1G83ERXG.inCaseTokengetsStuck.call(addressLUsDHR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinteoZjNIF = BigInt("1087")
		const BancorV2_ZapIn_General_V1_1qkKmZSW = await BancorV2_ZapIn_General_V1_1.new(uinteoZjNIF, {from: accounts[4]});
		const addressJnH2gLp = accounts[2]
		const bytev9dfkfF = "0x110218030a09100c0d1b13200f0403050b02071706051a15"
		const addressM4O1NT6 = accounts[2]
		const addressTilYZTh = accounts[1]
		const uintz9EFUJ3 = BigInt("1583")
		const uintOA6xLjP = BigInt("95")
		const addressyAMOsN = accounts[4]
		const addressyXRZz2d = accounts[4]
		const addressr0dE2ZZ = accounts[4]
		const byteiSHqhFA = "0x1e1a1615080904000e1a"
		const addressZuIYblb = accounts[0]
		const addressIv6OtwN = accounts[1]
		const uintbQ1qPGO = BigInt("44")
		const uintmKqQ2nn = BigInt("348")
		const addresscu48EY = accounts[4]
		const address0Xd4AJ = accounts[2]
		const addressxhdzubT = accounts[0]
		const addresslVBxc4e = await BancorV2_ZapIn_General_V1_1qkKmZSW.owner.call({from: accounts[1]});
//		const addressJhOh1G = await BancorV2_ZapIn_General_V1_1qkKmZSW.toPayable.call(addressJnH2gLp, {from: accounts[3]});
//		const uint256PqGyWAI = await BancorV2_ZapIn_General_V1_1qkKmZSW.ZapInSingleSided.call(addressr0dE2ZZ, addressyXRZz2d, addressyAMOsN, uintOA6xLjP, uintz9EFUJ3, addressTilYZTh, addressM4O1NT6, bytev9dfkfF, {from: accounts[3]});
//		const uint256huALEsJ = await BancorV2_ZapIn_General_V1_1qkKmZSW.ZapInSingleSided.call(addressxhdzubT, address0Xd4AJ, addresscu48EY, uintmKqQ2nn, uintbQ1qPGO, addressIv6OtwN, addressZuIYblb, byteiSHqhFA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresslVBxc4e, 0x28A9cDca80690344F3029eD3C82CF2840729a9A7)
		await expect(BancorV2_ZapIn_General_V1_1qkKmZSW.toPayable.call(addressJnH2gLp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUd67D8f = BigInt("224")
		const BancorV2_ZapIn_General_V1_1YARLUX7 = await BancorV2_ZapIn_General_V1_1.new(uintUd67D8f, {from: accounts[3]});
		const byteoviwLj = "0x010d0c03031106181a1201190d1b191c08"
		const addressXuHY8f = accounts[0]
		const addressXBQxnQp = accounts[0]
		const uintrwjDX0H = BigInt("613")
		const uintiBPiajx = BigInt("201")
		const addresshNm6Di5 = accounts[2]
		const addressuBVriSV = accounts[1]
		const addresscy2hDL2 = accounts[2]
		const uintJBs32a = BigInt("1356")
		const uintUNKkjJ9 = BigInt("1683")
		const addressiEyupl3 = accounts[4]
		const addressVn8sFRn = accounts[0]
//		await BancorV2_ZapIn_General_V1_1YARLUX7.toggleContractActive.call({from: accounts[3]});
//		const uint256ZX2IY0J = await BancorV2_ZapIn_General_V1_1YARLUX7.ZapInSingleSided.call(addresscy2hDL2, addressuBVriSV, addresshNm6Di5, uintiBPiajx, uintrwjDX0H, addressXBQxnQp, addressXuHY8f, byteoviwLj, {from: accounts[0]});
//		const uint16aQ1oBMV = await BancorV2_ZapIn_General_V1_1YARLUX7.set_new_goodwill.call(uintJBs32a, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1YARLUX7.nonReentrant.call({from: accounts[3]});
//		const uint16TZET9ip = await BancorV2_ZapIn_General_V1_1YARLUX7.set_new_goodwill.call(uintUNKkjJ9, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1YARLUX7.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressnMNPJix = await BancorV2_ZapIn_General_V1_1YARLUX7.inCaseTokengetsStuck.call(addressiEyupl3, {from: accounts[5]});
//		const addressoNKUGs = await BancorV2_ZapIn_General_V1_1YARLUX7.toPayable.call(addressVn8sFRn, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YARLUX7.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintTahIRP = BigInt("224")
		const BancorV2_ZapIn_General_V1_1YARLUX7 = await BancorV2_ZapIn_General_V1_1.new(uintTahIRP, {from: accounts[3]});
		const addressmsKEZi = accounts[3]
		const bytejDHQCIV = "0x010d0c03031106181a1201190d1b191c08"
		const addressP3CIJPa = accounts[0]
		const addresssoyFvzc = accounts[0]
		const uintuEQTOR = BigInt("613")
		const uintoWUvao = BigInt("201")
		const addresshmaqXr7 = accounts[2]
		const addressxlq9MAM = accounts[1]
		const addressfqYE12k = accounts[2]
		const uintmGJfD2 = BigInt("1356")
		const addressusPlSrv = accounts[4]
		const addressjtut88V = accounts[0]
		const addressfnGE6C = await BancorV2_ZapIn_General_V1_1YARLUX7.transferOwnership.call(addressmsKEZi, {from: accounts[3]});
//		const uint256ZX2IY0J = await BancorV2_ZapIn_General_V1_1YARLUX7.ZapInSingleSided.call(addressfqYE12k, addressxlq9MAM, addresshmaqXr7, uintoWUvao, uintuEQTOR, addresssoyFvzc, addressP3CIJPa, bytejDHQCIV, {from: accounts[0]});
//		const uint16aQ1oBMV = await BancorV2_ZapIn_General_V1_1YARLUX7.set_new_goodwill.call(uintmGJfD2, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1YARLUX7.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1YARLUX7.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressnMNPJix = await BancorV2_ZapIn_General_V1_1YARLUX7.inCaseTokengetsStuck.call(addressusPlSrv, {from: accounts[5]});
//		const addressoNKUGs = await BancorV2_ZapIn_General_V1_1YARLUX7.toPayable.call(addressjtut88V, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1YARLUX7.ZapInSingleSided.call(addressfqYE12k, addressxlq9MAM, addresshmaqXr7, uintoWUvao, uintuEQTOR, addresssoyFvzc, addressP3CIJPa, bytejDHQCIV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinthu4bWTk = BigInt("1971")
		const BancorV2_ZapIn_General_V1_1K9pmOqe = await BancorV2_ZapIn_General_V1_1.new(uinthu4bWTk, {from: accounts[2]});
		const byteh2ZWUHJ = "0x2008060e0212080b1706060412170b010016130115130f091b"
		const address7Ct9wk = accounts[3]
		const addressdukOj0z = accounts[4]
		const uintA5FE6gM = BigInt("796")
		const uinthEpougL = BigInt("1470")
		const addressHRzTbVg = accounts[3]
		const addressDY6oXUF = accounts[2]
		const addressmUwZvd = accounts[1]
		const uintdeqQ3gu = BigInt("1519")
//		await BancorV2_ZapIn_General_V1_1K9pmOqe.renounceOwnership.call({from: accounts[2]});
//		const uint256dHauNhI = await BancorV2_ZapIn_General_V1_1K9pmOqe.ZapInSingleSided.call(addressmUwZvd, addressDY6oXUF, addressHRzTbVg, uinthEpougL, uintA5FE6gM, addressdukOj0z, address7Ct9wk, byteh2ZWUHJ, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1K9pmOqe.renounceOwnership.call({from: accounts[0]});
//		const addressetRUlJ7 = await BancorV2_ZapIn_General_V1_1K9pmOqe.owner.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1K9pmOqe.stopInEmergency.call({from: accounts[1]});
//		const boolsHXq4Ha = await BancorV2_ZapIn_General_V1_1K9pmOqe.isOwner.call({from: accounts[0]});
//		const uint16eLYLw3X = await BancorV2_ZapIn_General_V1_1K9pmOqe.set_new_goodwill.call(uintdeqQ3gu, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1K9pmOqe.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintstSYVc = BigInt("1527")
		const BancorV2_ZapIn_General_V1_1pZttvRu = await BancorV2_ZapIn_General_V1_1.new(uintstSYVc, {from: accounts[2]});
		const addressS8sk41D = accounts[0]
//		await BancorV2_ZapIn_General_V1_1pZttvRu.withdraw.call({from: accounts[2]});
//		const addressyKV6fWR = await BancorV2_ZapIn_General_V1_1pZttvRu.inCaseTokengetsStuck.call(addressS8sk41D, {from: accounts[3]});
//		const addressTXqHGa1 = await BancorV2_ZapIn_General_V1_1pZttvRu.owner.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1pZttvRu.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})