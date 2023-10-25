const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsyFwxhtU = await UFragments.new({from: accounts[5]});
		const uintRkKaAGN = BigInt("791")
		const addressHxZR8w7 = accounts[3]
		const uintfMCWRPq = BigInt("1119")
		const addresskhPAeB = accounts[2]
		const addressr5o5RjT = await UFragmentsyFwxhtU.owner.call({from: accounts[5]});
//		const addresscVmLJ7 = await UFragmentsyFwxhtU.initRebase.call(addressHxZR8w7, uintRkKaAGN, {from: accounts[0]});
//		const boolUactiNL = await UFragmentsyFwxhtU.approve.call(addresskhPAeB, uintfMCWRPq, {from: accounts[0]});
//		const uint8n6dvssK = await UFragmentsyFwxhtU.decimals.call({from: accounts[1]});

		assert.equal(addressr5o5RjT, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsyFwxhtU.initRebase.call(addressHxZR8w7, uintRkKaAGN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsytpk4S5 = await UFragments.new({from: accounts[0]});
		const addressaQj5Y6 = accounts[2]
		const intGKBV3Ue = BigInt("-974")
		const intS97fgQs = BigInt("1396")
//		await UFragmentsytpk4S5.initializer.call({from: accounts[4]});
//		const addressG9SrEdV = await UFragmentsytpk4S5.initialize.call(addressaQj5Y6, {from: accounts[1]});
//		await UFragmentsytpk4S5.renounceOwnership.call({from: accounts[3]});
//		const int256XvbFoqs = await UFragmentsytpk4S5.sub.call(intS97fgQs, intGKBV3Ue, {from: accounts[2]});

		await expect(UFragmentsytpk4S5.initializer.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsWnYoyrD = await UFragments.new({from: accounts[0]});
		const intCziJZFr = BigInt("1757")
		const intjszySDE = BigInt("-1842")
		const intrnPaFW = BigInt("-400")
		const int90obrf = BigInt("147")
		const intaAprpZh = BigInt("-260")
		const addressP3Vh4dt = accounts[1]
		const uint256h13gdiv = await UFragmentsWnYoyrD.totalSupply.call({from: accounts[4]});
//		const int256tISVP9 = await UFragmentsWnYoyrD.div.call(intjszySDE, intCziJZFr, {from: accounts[4]});
//		const uint256H1HMCPb = await UFragmentsWnYoyrD.calRebase.call({from: accounts[2]});
//		const int256lIZjQeW = await UFragmentsWnYoyrD.abs.call(intrnPaFW, {from: accounts[5]});
//		const int256yjfuDwn = await UFragmentsWnYoyrD.div.call(intaAprpZh, int90obrf, {from: accounts[2]});
//		const addressxLBEMXT = await UFragmentsWnYoyrD.initialize.call(addressP3Vh4dt, {from: accounts[3]});

		assert.equal(uint256h13gdiv, BigInt("0"))
		await expect(UFragmentsWnYoyrD.div.call(intjszySDE, intCziJZFr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsfjzQBAs = await UFragments.new({from: accounts[2]});
		const addresszi06no = accounts[4]
		const addressWUCmqV = accounts[0]
		const addresssJ41MUA = await UFragmentsfjzQBAs.owner.call({from: accounts[3]});
		const uint256KXgTqRe = await UFragmentsfjzQBAs.totalSupply.call({from: accounts[0]});
		const uint256LSIGn3 = await UFragmentsfjzQBAs.allowance.call(addressWUCmqV, addresszi06no, {from: accounts[5]});
//		const uint256fuaLxD7 = await UFragmentsfjzQBAs.calRebase.call({from: accounts[2]});

		assert.equal(addresssJ41MUA, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256KXgTqRe, BigInt("0"))
		assert.equal(uint256LSIGn3, BigInt("0"))
		await expect(UFragmentsfjzQBAs.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsiIv5hFW = await UFragments.new({from: accounts[2]});
		const addressCs5NV5m = accounts[0]
		const addressEhkxs6r = accounts[5]
		const addressm9kLqIY = accounts[5]
		const addressvZwqah3 = accounts[2]
		const intiwqNQJ = BigInt("-730")
		const intvZen1B4 = BigInt("1562")
		const uint8u2rbfrY = await UFragmentsiIv5hFW.decimals.call({from: accounts[2]});
		const uint256ZUjhPWY = await UFragmentsiIv5hFW.allowance.call(addressEhkxs6r, addressCs5NV5m, {from: accounts[1]});
//		const addressDZprpTK = await UFragmentsiIv5hFW.initialize.call(addressm9kLqIY, {from: accounts[4]});
//		const addressGBNwUVy = await UFragmentsiIv5hFW.initialize.call(addressvZwqah3, {from: accounts[2]});
//		const int256lMO7x9o = await UFragmentsiIv5hFW.add.call(intvZen1B4, intiwqNQJ, {from: accounts[2]});

		assert.equal(uint256ZUjhPWY, BigInt("0"))
		assert.equal(uint8u2rbfrY, BigInt("0"))
		await expect(UFragmentsiIv5hFW.initialize.call(addressm9kLqIY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsKLDAVd6 = await UFragments.new({from: accounts[1]});
		const addresseExJmUm = accounts[1]
		const intutocRL0 = BigInt("-363")
		const uintevAcmIU = BigInt("636")
		const addressuOKXTFO = accounts[0]
		const uint256JnPKwT = await UFragmentsKLDAVd6.balanceOf.call(addresseExJmUm, {from: accounts[2]});
		const boolkZAiAig = await UFragmentsKLDAVd6.rebaseTimeInfo.call({from: accounts[3]});
//		await UFragmentsKLDAVd6.onlyOwner.call({from: accounts[3]});
//		const int256DOAgWMz = await UFragmentsKLDAVd6.abs.call(intutocRL0, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjihvp5U = await UFragmentsKLDAVd6.initRebase.call(addressuOKXTFO, uintevAcmIU, {from: accounts[1]});

		assert.equal(uint256JnPKwT, BigInt("0"))
		await expect(UFragmentsKLDAVd6.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsvJ3PHB = await UFragments.new({from: accounts[4]});
		const uintVDDiOBk = BigInt("942")
		const addressfZBAqU5 = accounts[3]
		const addressytlowYT = "0x0000000000000000000000000000000000000001"
		const intBipFSnd = BigInt("1243")
		const intsQXVi6c = BigInt("-1837")
		const stringNGEkO1C = await UFragmentsvJ3PHB.symbol.call({from: accounts[5]});
//		const boolrFuNehE = await UFragmentsvJ3PHB.transfer.call(addressfZBAqU5, uintVDDiOBk, {from: accounts[0]});
//		const uint256uDNDW39 = await UFragmentsvJ3PHB.balanceOf.call(addressytlowYT, {from: accounts[1]});
//		const int256FV0tDDv = await UFragmentsvJ3PHB.mul.call(intsQXVi6c, intBipFSnd, {from: accounts[4]});

		assert.equal(stringNGEkO1C, "")
		await expect(UFragmentsvJ3PHB.transfer.call(addressfZBAqU5, uintVDDiOBk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsgOwFLXg = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressb1d4s0w = accounts[1]
		const addressX0VXKsA = await UFragmentsgOwFLXg.initialize.call(addressb1d4s0w, {from: accounts[0]});
		const uint256eWxjg6J = await UFragmentsgOwFLXg.calRebase.call({from: accounts[3]});
		const stringVYiM994 = await UFragmentsgOwFLXg.symbol.call({from: accounts[5]});
	});

	it('test for UFragments', async () => {
		const UFragmentsvJ3PHB = await UFragments.new({from: accounts[4]});
		const addressc0HOMTX = "0x00000000000000000000000000000000000000-1"
		const addressHDtZRB2 = accounts[1]
		const stringNGEkO1C = await UFragmentsvJ3PHB.symbol.call({from: accounts[5]});
//		const uint256uDNDW39 = await UFragmentsvJ3PHB.balanceOf.call(addressc0HOMTX, {from: accounts[1]});
//		const addressvcRHBnX = await UFragmentsvJ3PHB.transferOwnership.call(addressHDtZRB2, {from: accounts[4]});

		assert.equal(stringNGEkO1C, "")
		await expect(UFragmentsvJ3PHB.balanceOf.call(addressc0HOMTX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentszSFiGns = await UFragments.new({from: accounts[1]});
		const uintnkBcMbG = BigInt("869")
		const addressaA3XKSa = accounts[3]
		const addressvyF1Jgq = accounts[0]
		const intvQuWNqc = BigInt("868")
		const intAe6aHdQ = BigInt("-1980")
//		const boolXLKUw7A = await UFragmentszSFiGns.transferFrom.call(addressvyF1Jgq, addressaA3XKSa, uintnkBcMbG, {from: accounts[1]});
//		const int256kVIt2i = await UFragmentszSFiGns.mul.call(intAe6aHdQ, intvQuWNqc, {from: accounts[0]});
//		const addressrSHk6cB = await UFragmentszSFiGns.owner.call({from: accounts[3]});

		await expect(UFragmentszSFiGns.transferFrom.call(addressvyF1Jgq, addressaA3XKSa, uintnkBcMbG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFsopLvn = await UFragments.new({from: accounts[1]});
		const addressMGUsPVI = accounts[1]
		const uintZ8YOQ55 = BigInt("134")
		const stringBqRvfs4 = "OGGBjf42NlVEDRbTzctcXBrRJ1JGAarDRwyJ1SATpTAkhTYEkRK4gHdL08V8SlgxpVK63rQj"
		const stringP2VRRMA = "12j2f9hQqbsrVsoFpnuipYDKUVRP8aJJ2CbqeduwT0sy4"
		const uint2568pL1E3 = await UFragmentsFsopLvn.balanceOf.call(addressMGUsPVI, {from: accounts[0]});
		const stringhNx7mkZ = await UFragmentsFsopLvn.initialize.call(stringP2VRRMA, stringBqRvfs4, uintZ8YOQ55, {from: accounts[4]});
//		const uint256aaixOqz = await UFragmentsFsopLvn.calRebase.call({from: accounts[1]});
//		const stringC0kfCQS = await UFragmentsFsopLvn.symbol.call({from: accounts[1]});

		assert.equal(uint2568pL1E3, BigInt("0"))
		await expect(UFragmentsFsopLvn.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsvJ3PHB = await UFragments.new({from: accounts[4]});
		const addressh37vyth = "0x0000000000000000000000000000000000000000"
		const uintyUUG2qV = BigInt("249")
		const addressm0W4TTD = accounts[2]
		const uint256uDNDW39 = await UFragmentsvJ3PHB.balanceOf.call(addressh37vyth, {from: accounts[1]});
		const stringPa7wgcm = await UFragmentsvJ3PHB.name.call({from: accounts[1]});
//		const addressZKhotVN = await UFragmentsvJ3PHB.initRebase.call(addressm0W4TTD, uintyUUG2qV, {from: accounts[5]});

		assert.equal(stringPa7wgcm, "")
		assert.equal(uint256uDNDW39, BigInt("0"))
		await expect(UFragmentsvJ3PHB.initRebase.call(addressm0W4TTD, uintyUUG2qV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsvJ3PHB = await UFragments.new({from: accounts[4]});
		const addressWV3Nl8e = "0x0000000000000000000000000000000000000001"
		const uintAWOnlkj = BigInt("2037")
		const addressIyazkJ = accounts[1]
		const uint256uDNDW39 = await UFragmentsvJ3PHB.balanceOf.call(addressWV3Nl8e, {from: accounts[1]});
		const boolF2zqv1r = await UFragmentsvJ3PHB.approve.call(addressIyazkJ, uintAWOnlkj, {from: accounts[1]});

		assert.equal(boolF2zqv1r, true)
		assert.equal(uint256uDNDW39, BigInt("0"))
	});
})