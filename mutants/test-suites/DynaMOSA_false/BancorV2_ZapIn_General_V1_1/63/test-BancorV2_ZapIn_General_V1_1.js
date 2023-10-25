const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintSxjn3Yq = BigInt("896")
		const BancorV2_ZapIn_General_V1_1o22292u = await BancorV2_ZapIn_General_V1_1.new(uintSxjn3Yq, {from: "0x0000000000000000000000000000000000000001"});
		const uintAGHrgM = BigInt("303")
		const boolP6pAMUi = await BancorV2_ZapIn_General_V1_1o22292u.isOwner.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1o22292u.renounceOwnership.call({from: accounts[0]});
		const uint16PlSsvQ = await BancorV2_ZapIn_General_V1_1o22292u.set_new_goodwill.call(uintAGHrgM, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1o22292u.withdraw.call({from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinti1CvtvQ = BigInt("966")
		const BancorV2_ZapIn_General_V1_1XJC8rXJ = await BancorV2_ZapIn_General_V1_1.new(uinti1CvtvQ, {from: accounts[0]});
		const addressaPvrWYl = accounts[0]
		const addressE36eyLJ = accounts[2]
//		const addressvW8K75v = await BancorV2_ZapIn_General_V1_1XJC8rXJ.transferOwnership.call(addressaPvrWYl, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1XJC8rXJ.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressoRc7Rjt = await BancorV2_ZapIn_General_V1_1XJC8rXJ.inCaseTokengetsStuck.call(addressE36eyLJ, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1XJC8rXJ.transferOwnership.call(addressaPvrWYl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uint69FOzb = BigInt("1769")
		const BancorV2_ZapIn_General_V1_1fvJo9lP = await BancorV2_ZapIn_General_V1_1.new(uint69FOzb, {from: accounts[4]});
		const addressgKE37Rn = await BancorV2_ZapIn_General_V1_1fvJo9lP.owner.call({from: accounts[3]});
		const addressyqU1eO = await BancorV2_ZapIn_General_V1_1fvJo9lP.owner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1fvJo9lP.onlyOwner.call({from: accounts[4]});

		assert.equal(addressgKE37Rn, 0xfF0DbA52225E44d1b8C7D5c184c8eb2422D7b45c)
		assert.equal(addressyqU1eO, 0xfF0DbA52225E44d1b8C7D5c184c8eb2422D7b45c)
		await expect(BancorV2_ZapIn_General_V1_1fvJo9lP.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJhw8VPQ = BigInt("1769")
		const BancorV2_ZapIn_General_V1_1fvJo9lP = await BancorV2_ZapIn_General_V1_1.new(uintJhw8VPQ, {from: accounts[4]});
		const byteYvBqwUG = "0x100020191f1116091f1c111214"
		const addressZPdTTAx = accounts[5]
		const addressS2iQyvW = "0x0000000000000000000000000000000000000001"
		const uinttUaUht9 = BigInt("1688")
		const uintzzQ3df = BigInt("880")
		const addressY1aeT5b = accounts[1]
		const addressVfYA5RP = accounts[3]
		const addressfbPpFbk = accounts[4]
		const addressgKE37Rn = await BancorV2_ZapIn_General_V1_1fvJo9lP.owner.call({from: accounts[3]});
//		const uint25652R1gq = await BancorV2_ZapIn_General_V1_1fvJo9lP.ZapInSingleSided.call(addressfbPpFbk, addressVfYA5RP, addressY1aeT5b, uintzzQ3df, uinttUaUht9, addressS2iQyvW, addressZPdTTAx, byteYvBqwUG, {from: accounts[0]});
//		const addressyqU1eO = await BancorV2_ZapIn_General_V1_1fvJo9lP.owner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1fvJo9lP.onlyOwner.call({from: accounts[4]});

		assert.equal(addressgKE37Rn, 0xfF0DbA52225E44d1b8C7D5c184c8eb2422D7b45c)
		await expect(BancorV2_ZapIn_General_V1_1fvJo9lP.ZapInSingleSided.call(addressfbPpFbk, addressVfYA5RP, addressY1aeT5b, uintzzQ3df, uinttUaUht9, addressS2iQyvW, addressZPdTTAx, byteYvBqwUG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintSQtAuYl = BigInt("1888")
		const BancorV2_ZapIn_General_V1_1bnOYwBB = await BancorV2_ZapIn_General_V1_1.new(uintSQtAuYl, {from: accounts[0]});
		const addressF2utgdn = await BancorV2_ZapIn_General_V1_1bnOYwBB.owner.call({from: accounts[4]});
		const addresstzTKMxL = await BancorV2_ZapIn_General_V1_1bnOYwBB.owner.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1bnOYwBB.toggleContractActive.call({from: accounts[0]});

		assert.equal(addressF2utgdn, 0xe92A769CDbabf105DBb5fB8E69656D24416B4b65)
		assert.equal(addresstzTKMxL, 0xe92A769CDbabf105DBb5fB8E69656D24416B4b65)
		await expect(BancorV2_ZapIn_General_V1_1bnOYwBB.toggleContractActive.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintSD6YY8x = BigInt("1769")
		const BancorV2_ZapIn_General_V1_1fvJo9lP = await BancorV2_ZapIn_General_V1_1.new(uintSD6YY8x, {from: accounts[4]});
		const addressKdQvtM6 = accounts[0]
		const byteNB2JGBy = "0x100020191f1116091f1c111214"
		const addressfDbMhrJ = accounts[5]
		const addressGW6oNib = "0x0000000000000000000000000000000000000001"
		const uintMetzM1G = BigInt("1688")
		const uintDboLV36 = BigInt("880")
		const addressusdnjx = accounts[1]
		const addressOSnLHFP = accounts[3]
		const addressHOXn1qG = accounts[4]
//		const addressfeoZPaG = await BancorV2_ZapIn_General_V1_1fvJo9lP.inCaseTokengetsStuck.call(addressKdQvtM6, {from: accounts[4]});
//		const addressgKE37Rn = await BancorV2_ZapIn_General_V1_1fvJo9lP.owner.call({from: accounts[3]});
//		const uint25652R1gq = await BancorV2_ZapIn_General_V1_1fvJo9lP.ZapInSingleSided.call(addressHOXn1qG, addressOSnLHFP, addressusdnjx, uintDboLV36, uintMetzM1G, addressGW6oNib, addressfDbMhrJ, byteNB2JGBy, {from: accounts[0]});
//		const addressyqU1eO = await BancorV2_ZapIn_General_V1_1fvJo9lP.owner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1fvJo9lP.onlyOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1fvJo9lP.inCaseTokengetsStuck.call(addressKdQvtM6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintmK8vv8C = BigInt("1685")
		const BancorV2_ZapIn_General_V1_1o3sUL3w = await BancorV2_ZapIn_General_V1_1.new(uintmK8vv8C, {from: accounts[0]});
		const addressgInRRQV = accounts[4]
		const addressrtLyaz8 = await BancorV2_ZapIn_General_V1_1o3sUL3w.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1o3sUL3w.toggleContractActive.call({from: accounts[0]});
//		const addressBvDdJi0 = await BancorV2_ZapIn_General_V1_1o3sUL3w.transferOwnership.call(addressgInRRQV, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1o3sUL3w.nonReentrant.call({from: accounts[3]});

		assert.equal(addressrtLyaz8, 0xe92A769CDbabf105DBb5fB8E69656D24416B4b65)
		await expect(BancorV2_ZapIn_General_V1_1o3sUL3w.toggleContractActive.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintzt0rAk = BigInt("1769")
		const BancorV2_ZapIn_General_V1_1fvJo9lP = await BancorV2_ZapIn_General_V1_1.new(uintzt0rAk, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1fvJo9lP.withdraw.call({from: accounts[4]});
//		const addressyqU1eO = await BancorV2_ZapIn_General_V1_1fvJo9lP.owner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1fvJo9lP.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintFcxXB5f = BigInt("1636")
		const BancorV2_ZapIn_General_V1_1obiEDdX = await BancorV2_ZapIn_General_V1_1.new(uintFcxXB5f, {from: accounts[1]});
		const uintdJ572fl = BigInt("424")
		const byteUxdFA0e = "0x000109"
		const addressqBBuDB6 = accounts[4]
		const addresszVHYnD8 = accounts[1]
		const uintLz0M4s = BigInt("1869")
		const uintamqwI8p = BigInt("924")
		const addressEwezhc = accounts[1]
		const addresslAsw3CT = accounts[3]
		const addressiNJ98I4 = accounts[4]
		const uintd8ophry = BigInt("1757")
		const uint16ESybqcb = await BancorV2_ZapIn_General_V1_1obiEDdX.set_new_goodwill.call(uintdJ572fl, {from: accounts[1]});
		const boolvLx46pM = await BancorV2_ZapIn_General_V1_1obiEDdX.isOwner.call({from: accounts[0]});
//		const uint256F7B6QVM = await BancorV2_ZapIn_General_V1_1obiEDdX.ZapInSingleSided.call(addressiNJ98I4, addresslAsw3CT, addressEwezhc, uintamqwI8p, uintLz0M4s, addresszVHYnD8, addressqBBuDB6, byteUxdFA0e, {from: "0x0000000000000000000000000000000000000001"});
//		const uint16xyky8pB = await BancorV2_ZapIn_General_V1_1obiEDdX.set_new_goodwill.call(uintd8ophry, {from: accounts[2]});
//		const addressczcMiHz = await BancorV2_ZapIn_General_V1_1obiEDdX.owner.call({from: accounts[3]});

		assert.equal(boolvLx46pM, false)
		await expect(BancorV2_ZapIn_General_V1_1obiEDdX.ZapInSingleSided.call(addressiNJ98I4, addresslAsw3CT, addressEwezhc, uintamqwI8p, uintLz0M4s, addresszVHYnD8, addressqBBuDB6, byteUxdFA0e, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})