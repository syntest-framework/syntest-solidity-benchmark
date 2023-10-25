const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintazVzYLH = BigInt("1610")
		const BancorV2_ZapIn_General_V1_1g9yFQwo = await BancorV2_ZapIn_General_V1_1.new(uintazVzYLH, {from: accounts[0]});
		const addressztwfF5w = accounts[4]
		const byteXU9NGf5 = "0x041d0215"
		const addressUQFrgk8 = accounts[0]
		const addressbeQAyPF = accounts[1]
		const uintsh3XcI = BigInt("1745")
		const uintt3u3iOR = BigInt("939")
		const addressULDFO8t = accounts[0]
		const addressFbEUmPV = accounts[4]
		const addressFk2rNr6 = accounts[0]
//		const addressE0oPsxx = await BancorV2_ZapIn_General_V1_1g9yFQwo.transferOwnership.call(addressztwfF5w, {from: accounts[3]});
//		const uint256GOadqud = await BancorV2_ZapIn_General_V1_1g9yFQwo.ZapInSingleSided.call(addressFk2rNr6, addressFbEUmPV, addressULDFO8t, uintt3u3iOR, uintsh3XcI, addressbeQAyPF, addressUQFrgk8, byteXU9NGf5, {from: accounts[2]});
//		const booloY7iZiJ = await BancorV2_ZapIn_General_V1_1g9yFQwo.isOwner.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1g9yFQwo.transferOwnership.call(addressztwfF5w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinty7W6Cm = BigInt("543")
		const BancorV2_ZapIn_General_V1_1ZxhDHk0 = await BancorV2_ZapIn_General_V1_1.new(uinty7W6Cm, {from: accounts[2]});
		const uintR88hcEf = BigInt("172")
		const addresszb0kBN9 = accounts[0]
		const addresslXH6onW = await BancorV2_ZapIn_General_V1_1ZxhDHk0.owner.call({from: accounts[4]});
//		const uint16qdD0rQ9 = await BancorV2_ZapIn_General_V1_1ZxhDHk0.set_new_goodwill.call(uintR88hcEf, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1ZxhDHk0.onlyOwner.call({from: accounts[0]});
//		const addresshgCMRX5 = await BancorV2_ZapIn_General_V1_1ZxhDHk0.owner.call({from: accounts[3]});
//		const addressCSDRN44 = await BancorV2_ZapIn_General_V1_1ZxhDHk0.transferOwnership.call(addresszb0kBN9, {from: accounts[3]});

		assert.equal(addresslXH6onW, 0xeaAC2414182008e17ecAcbB9ACF9Bf626a9120e9)
		await expect(BancorV2_ZapIn_General_V1_1ZxhDHk0.set_new_goodwill.call(uintR88hcEf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintONI1zRv = BigInt("1932")
		const BancorV2_ZapIn_General_V1_1ndywwKt = await BancorV2_ZapIn_General_V1_1.new(uintONI1zRv, {from: accounts[0]});
		const addressluzzASn = accounts[2]
		const byteni7wRGe = "0x121d1d02010e180f071f09160e0f1c040f04150f031f0e1a1d0e10081c1d0c"
		const addressbf2z1M8 = accounts[5]
		const addressvTZ0YA = accounts[4]
		const uintd4WFySi = BigInt("790")
		const uint0Z9AET = BigInt("1692")
		const addressD4HvXtd = accounts[3]
		const addresswKEfTLx = accounts[3]
		const addressjUowaw = accounts[0]
		const boolrgo61Rq = await BancorV2_ZapIn_General_V1_1ndywwKt.isOwner.call({from: accounts[2]});
//		const addressKPglSiI = await BancorV2_ZapIn_General_V1_1ndywwKt.toPayable.call(addressluzzASn, {from: accounts[1]});
//		const uint256LKJcIB0 = await BancorV2_ZapIn_General_V1_1ndywwKt.ZapInSingleSided.call(addressjUowaw, addresswKEfTLx, addressD4HvXtd, uint0Z9AET, uintd4WFySi, addressvTZ0YA, addressbf2z1M8, byteni7wRGe, {from: accounts[5]});
//		const boolbAEFXIB = await BancorV2_ZapIn_General_V1_1ndywwKt.isOwner.call({from: accounts[5]});

		assert.equal(boolrgo61Rq, false)
		await expect(BancorV2_ZapIn_General_V1_1ndywwKt.toPayable.call(addressluzzASn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintPZ6GPnL = BigInt("685")
		const BancorV2_ZapIn_General_V1_1uOUrd12 = await BancorV2_ZapIn_General_V1_1.new(uintPZ6GPnL, {from: accounts[2]});
		const uintMUVJ2T5 = BigInt("709")
		const byteNl2bKjc = "0x200316050903140e021809141d1801091d1e130d08"
		const addresssZM4Aet = accounts[5]
		const addressKuGf0uU = accounts[1]
		const uintndJoplb = BigInt("350")
		const uintYttVix = BigInt("162")
		const addressJOju5ED = accounts[2]
		const address0LKQb5 = accounts[4]
		const addressP0ztdpm = accounts[0]
		const uint16GmklV7W = await BancorV2_ZapIn_General_V1_1uOUrd12.set_new_goodwill.call(uintMUVJ2T5, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1uOUrd12.renounceOwnership.call({from: accounts[0]});
//		const uint256DW44YGP = await BancorV2_ZapIn_General_V1_1uOUrd12.ZapInSingleSided.call(addressP0ztdpm, address0LKQb5, addressJOju5ED, uintYttVix, uintndJoplb, addressKuGf0uU, addresssZM4Aet, byteNl2bKjc, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1uOUrd12.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinta7w9iot = BigInt("1646")
		const BancorV2_ZapIn_General_V1_1fzxsNAq = await BancorV2_ZapIn_General_V1_1.new(uinta7w9iot, {from: "0x0000000000000000000000000000000000000001"});
		const byteYpdz3Nh = "0x191003141f081c021f1f13161e19191f1415060e1f"
		const addressA85L911 = accounts[1]
		const addressX44oPx2 = accounts[5]
		const uintsWjyYY2 = BigInt("275")
		const uintiGEUZfx = BigInt("288")
		const addresslZoighO = accounts[1]
		const addressTliOrgR = accounts[3]
		const addressdHNeqmV = accounts[3]
		const byteNCl9UZf = "0x110f1a0e010c061e0e100f13041512140c100c19000117"
		const addresshG7bXo4 = accounts[1]
		const addressBpVivlK = accounts[2]
		const uintrl3Yj3q = BigInt("844")
		const uinttvia66a = BigInt("2008")
		const addressVFqPitC = accounts[1]
		const addressg4IrxGZ = accounts[0]
		const addressZ8VIBuK = accounts[4]
		const uint256sc6YxbO = await BancorV2_ZapIn_General_V1_1fzxsNAq.ZapInSingleSided.call(addressdHNeqmV, addressTliOrgR, addresslZoighO, uintiGEUZfx, uintsWjyYY2, addressX44oPx2, addressA85L911, byteYpdz3Nh, {from: accounts[2]});
		const boolU1hFJ5V = await BancorV2_ZapIn_General_V1_1fzxsNAq.isOwner.call({from: accounts[4]});
		const uint256qYBxstA = await BancorV2_ZapIn_General_V1_1fzxsNAq.ZapInSingleSided.call(addressZ8VIBuK, addressg4IrxGZ, addressVFqPitC, uinttvia66a, uintrl3Yj3q, addressBpVivlK, addresshG7bXo4, byteNCl9UZf, {from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintLj7TnGp = BigInt("70")
		const BancorV2_ZapIn_General_V1_1rUjhUZ8 = await BancorV2_ZapIn_General_V1_1.new(uintLj7TnGp, {from: accounts[4]});
		const byteztH4s1c = "0x0b0608151f170c1c051d081d091b011c0e071a191b031c160d1219171c1d1d11"
		const addressWFA9DpS = accounts[0]
		const addressGZy3cn = accounts[1]
		const uintWXgUlkf = BigInt("467")
		const uintJ8b1VTY = BigInt("239")
		const addressiO5yhke = accounts[1]
		const addressIJK5WUz = accounts[1]
		const addressrDnJuB3 = accounts[3]
		const addressG5pFpD3 = accounts[4]
		const uintPeDYdEV = BigInt("369")
//		const uint256m6igcT9 = await BancorV2_ZapIn_General_V1_1rUjhUZ8.ZapInSingleSided.call(addressrDnJuB3, addressIJK5WUz, addressiO5yhke, uintJ8b1VTY, uintWXgUlkf, addressGZy3cn, addressWFA9DpS, byteztH4s1c, {from: accounts[5]});
//		const addressjXINR6Z = await BancorV2_ZapIn_General_V1_1rUjhUZ8.toPayable.call(addressG5pFpD3, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1rUjhUZ8.nonReentrant.call({from: accounts[5]});
//		const boolb8VnbND = await BancorV2_ZapIn_General_V1_1rUjhUZ8.isOwner.call({from: accounts[1]});
//		const uint16VQtT8J4 = await BancorV2_ZapIn_General_V1_1rUjhUZ8.set_new_goodwill.call(uintPeDYdEV, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1rUjhUZ8.ZapInSingleSided.call(addressrDnJuB3, addressIJK5WUz, addressiO5yhke, uintJ8b1VTY, uintWXgUlkf, addressGZy3cn, addressWFA9DpS, byteztH4s1c, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintua8NXdl = BigInt("267")
		const BancorV2_ZapIn_General_V1_1xwEFT8j = await BancorV2_ZapIn_General_V1_1.new(uintua8NXdl, {from: accounts[3]});
		const addressPrEf08c = accounts[2]
		const addressG6FsaOH = accounts[5]
		const addressVax3jvj = await BancorV2_ZapIn_General_V1_1xwEFT8j.transferOwnership.call(addressPrEf08c, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1xwEFT8j.withdraw.call({from: accounts[1]});
//		const addressyiHVAKP = await BancorV2_ZapIn_General_V1_1xwEFT8j.toPayable.call(addressG6FsaOH, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1xwEFT8j.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintliIWtLI = BigInt("629")
		const BancorV2_ZapIn_General_V1_1kR8ssyg = await BancorV2_ZapIn_General_V1_1.new(uintliIWtLI, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1kR8ssyg.renounceOwnership.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1kR8ssyg.renounceOwnership.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1kR8ssyg.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintrGJXF6P = BigInt("629")
		const BancorV2_ZapIn_General_V1_1kR8ssyg = await BancorV2_ZapIn_General_V1_1.new(uintrGJXF6P, {from: accounts[2]});
		const addressTj7U39P = accounts[5]
		const bytelCynyU = "0x10111c111d111802"
		const addressxeeLDt = accounts[0]
		const addressvEFV0hw = accounts[3]
		const uint0JcyQo = BigInt("1769")
		const uintMRQNyt8 = BigInt("237")
		const addressR4tlL8y = accounts[3]
		const addressM7ZRkbA = accounts[0]
		const addressHXBMgbc = accounts[1]
//		const addresspTKLy8k = await BancorV2_ZapIn_General_V1_1kR8ssyg.inCaseTokengetsStuck.call(addressTj7U39P, {from: accounts[2]});
//		const uint256HmnHYlI = await BancorV2_ZapIn_General_V1_1kR8ssyg.ZapInSingleSided.call(addressHXBMgbc, addressM7ZRkbA, addressR4tlL8y, uintMRQNyt8, uint0JcyQo, addressvEFV0hw, addressxeeLDt, bytelCynyU, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1kR8ssyg.inCaseTokengetsStuck.call(addressTj7U39P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinteB8J1p = BigInt("629")
		const BancorV2_ZapIn_General_V1_1kR8ssyg = await BancorV2_ZapIn_General_V1_1.new(uinteB8J1p, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1kR8ssyg.toggleContractActive.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1kR8ssyg.renounceOwnership.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1kR8ssyg.toggleContractActive.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintvuyXC0g = BigInt("1194")
		const BancorV2_ZapIn_General_V1_1zMAyc5W = await BancorV2_ZapIn_General_V1_1.new(uintvuyXC0g, {from: accounts[2]});
		const addressfZQ0PN2 = accounts[2]
//		await BancorV2_ZapIn_General_V1_1zMAyc5W.withdraw.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1zMAyc5W.stopInEmergency.call({from: accounts[2]});
//		const boolG7bhfgL = await BancorV2_ZapIn_General_V1_1zMAyc5W.isOwner.call({from: accounts[0]});
//		const addressESFEMRN = await BancorV2_ZapIn_General_V1_1zMAyc5W.transferOwnership.call(addressfZQ0PN2, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1zMAyc5W.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})