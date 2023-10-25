const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringP6ptbx = "UUOBVBK9xS1ilppVFXTBjU9hFWE9xbLat1emC3bq92Xkah8nCf7"
		const stringTaYh8H = "eSTie269tU3iyDTUoyTZBLW4zIKIs6QoC1OtxTvlQdG0D17LwLjLeGcfxICHVNNLQogALYSh70TS7b1Qt6X9"
		const uintfOlphSx = BigInt("147")
		const TPAuY1oC1b = await TPA.new(stringP6ptbx, stringTaYh8H, uintfOlphSx, {from: accounts[3]});
		const addresssP71j9w = accounts[0]
		const addressO3Y2mTw = accounts[0]
		const addressgSM3cQ9 = await TPAuY1oC1b.notFrozen.call(addresssP71j9w, {from: accounts[1]});
		await TPAuY1oC1b.renounceAdmin.call({from: accounts[4]});
		const boolntNs9SI = await TPAuY1oC1b.freezeAccount.call(addressO3Y2mTw, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TPA', async () => {
		const TPASVtBz07 = await TPA.new({from: accounts[4]});
		const uinthismNFw = BigInt("1080")
		const uint3LZF1z = BigInt("1871")
		const addressPr51qUJ = accounts[0]
		const addressJ1ua8eO = accounts[2]
		const addressAwCOszs = accounts[1]
		const uintgjh4mRj = BigInt("1663")
		const addressNKxgm1z = accounts[3]
		const booleVpnjbD = await TPASVtBz07.lock.call(addressPr51qUJ, uint3LZF1z, uinthismNFw, {from: accounts[2]});
		const boolrFj4xrS = await TPASVtBz07.paused.call({from: accounts[2]});
		await TPASVtBz07.whenNotPaused.call({from: accounts[2]});
		const uint256SKj2UNt = await TPASVtBz07.allowance.call(addressAwCOszs, addressJ1ua8eO, {from: accounts[0]});
		const boolOmF20h1 = await TPASVtBz07.transfer.call(addressNKxgm1z, uintgjh4mRj, {from: accounts[2]});

		await expect(TPASVtBz07.lock.call(addressPr51qUJ, uint3LZF1z, uinthismNFw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASKtJNcE = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUyg3i2 = BigInt("1821")
		const addressutbPL4V = accounts[2]
		const uintwc4X8Ua = BigInt("258")
		const addresst1uvHWh = accounts[5]
		const address3dRfmE = accounts[4]
		const booldiHN6vj = await TPASKtJNcE.unlock.call(addressutbPL4V, uintUyg3i2, {from: accounts[1]});
		const boolKFrM4IP = await TPASKtJNcE.transfer.call(addresst1uvHWh, uintwc4X8Ua, {from: accounts[4]});
		await TPASKtJNcE.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressZ6XjVAf = await TPASKtJNcE.addAdmin.call(address3dRfmE, {from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addressmAbIyfG = accounts[4]
		const addressPJ18X8e = "0x0000000000000000000000000000000000000001"
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOMLTrlo = await TPAhqGQNxT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressmAbIyfG, {from: accounts[5]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addressPJ18X8e, {from: accounts[2]});

		assert.equal(boolOMLTrlo, false)
		assert.equal(stringUGz0QvQ, "TPA")
		assert.equal(uint256vhgN0UJ, BigInt("10000000000000000000000000000"))
		await expect(TPAhqGQNxT.addAdmin.call(addressPJ18X8e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addressFV1Jk4G = accounts[4]
		const addressiBLKCEP = "0x0000000000000000000000000000000000000001"
		const uint8f4J6mc = await TPAhqGQNxT.decimals.call({from: accounts[3]});
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOMLTrlo = await TPAhqGQNxT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressFV1Jk4G, {from: accounts[5]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addressiBLKCEP, {from: accounts[2]});

		assert.equal(boolOMLTrlo, false)
		assert.equal(stringUGz0QvQ, "TPA")
		assert.equal(uint256vhgN0UJ, BigInt("10000000000000000000000000000"))
		assert.equal(uint8f4J6mc, BigInt("18"))
		await expect(TPAhqGQNxT.addAdmin.call(addressiBLKCEP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAkhJI6Ls = await TPA.new({from: accounts[0]});
		const uintmfJjoiN = BigInt("187")
		const addressvZr5pTJ = accounts[0]
		const uintlIY5tRH = BigInt("1240")
		const addressFXFciNZ = accounts[0]
		const addressjbnew1 = accounts[0]
		const addressJRcohIX = accounts[2]
		const addressI5O57zC = accounts[5]
		const addressb9vZsuO = await TPAkhJI6Ls.burnFrom.call(addressvZr5pTJ, uintmfJjoiN, {from: accounts[2]});
		const boolSSIVYcE = await TPAkhJI6Ls.transfer.call(addressFXFciNZ, uintlIY5tRH, {from: accounts[2]});
		const uint256okjZ8GN = await TPAkhJI6Ls.balanceOf.call(addressjbnew1, {from: accounts[2]});
		const addressnBNnwqV = await TPAkhJI6Ls.removeAdmin.call(addressJRcohIX, {from: accounts[3]});
		const boolkM031t7 = await TPAkhJI6Ls.isAdmin.call(addressI5O57zC, {from: accounts[1]});

		await expect(TPAkhJI6Ls.burnFrom.call(addressvZr5pTJ, uintmfJjoiN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addressVEzmcrq = accounts[0]
		const uintO0cW0IQ = BigInt("440")
		const addressibZNOK = accounts[4]
		const addressrtGyKWP = accounts[4]
		const addressigakTyN = "0x0000000000000000000000000000000000000001"
		const uint8f4J6mc = await TPAhqGQNxT.decimals.call({from: accounts[3]});
		const uint256pGcQI67 = await TPAhqGQNxT.balanceOf.call(addressVEzmcrq, {from: accounts[0]});
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOMLTrlo = await TPAhqGQNxT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmMbPzyn = await TPAhqGQNxT.transfer.call(addressibZNOK, uintO0cW0IQ, {from: accounts[0]});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressrtGyKWP, {from: accounts[5]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addressigakTyN, {from: accounts[2]});

		assert.equal(boolOMLTrlo, false)
		assert.equal(stringUGz0QvQ, "TPA")
		assert.equal(uint256pGcQI67, BigInt("0"))
		assert.equal(uint8f4J6mc, BigInt("18"))
		await expect(TPAhqGQNxT.transfer.call(addressibZNOK, uintO0cW0IQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASVtBz07 = await TPA.new({from: accounts[4]});
		const addresshVzLMC0 = accounts[1]
		const addressPPV4NIB = accounts[2]
		const addressBV23waC = accounts[1]
		const uintf532UZa = BigInt("1663")
		const addressoh9keeg = accounts[3]
		const boolrFj4xrS = await TPASVtBz07.paused.call({from: accounts[2]});
		await TPASVtBz07.whenNotPaused.call({from: accounts[2]});
		const boolyrqo2Ld = await TPASVtBz07.isAdmin.call(addresshVzLMC0, {from: accounts[1]});
		const uint256SKj2UNt = await TPASVtBz07.allowance.call(addressBV23waC, addressPPV4NIB, {from: accounts[0]});
		const boolOmF20h1 = await TPASVtBz07.transfer.call(addressoh9keeg, uintf532UZa, {from: accounts[2]});

		assert.equal(boolrFj4xrS, false)
		await expect(TPASVtBz07.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAqAsR5uy = await TPA.new({from: accounts[1]});
		const addressl2eqmFn = accounts[2]
		const addressQPnBILE = accounts[0]
		const addressBhYBYaP = accounts[3]
		const uintyMEv1Lp = BigInt("572")
		const addressuq5iSW4 = accounts[2]
		const addressL3JpnRN = accounts[0]
		const uintUK44LhF = BigInt("1975")
		const addressy9wF8Dh = accounts[1]
		const uint2566PJDYS = await TPAqAsR5uy.allowance.call(addressQPnBILE, addressl2eqmFn, {from: accounts[1]});
		const addressIjJIMdO = await TPAqAsR5uy.transferOwnership.call(addressBhYBYaP, {from: accounts[3]});
		const boolukjz8Wo = await TPAqAsR5uy.unlock.call(addressuq5iSW4, uintyMEv1Lp, {from: accounts[5]});
		const addresslRCvmP = await TPAqAsR5uy.addAdmin.call(addressL3JpnRN, {from: accounts[4]});
		const boolhpKzEhT = await TPAqAsR5uy.decreaseAllowance.call(addressy9wF8Dh, uintUK44LhF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2566PJDYS, BigInt("0"))
		await expect(TPAqAsR5uy.transferOwnership.call(addressBhYBYaP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addresscVAz5aW = accounts[4]
		const uinte77lXNm = BigInt("869")
		const addressbliiKH = accounts[4]
		const addressxo5hF03 = "0x0000000000000000000000000000000000000002"
		const stringnSX0es = await TPAhqGQNxT.symbol.call({from: accounts[4]});
		const uint8f4J6mc = await TPAhqGQNxT.decimals.call({from: accounts[3]});
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOMLTrlo = await TPAhqGQNxT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addresscVAz5aW, {from: accounts[5]});
		const boolnrQJ6ea = await TPAhqGQNxT.approve.call(addressbliiKH, uinte77lXNm, {from: accounts[1]});
		await TPAhqGQNxT.onlyAdmin.call({from: accounts[5]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addressxo5hF03, {from: accounts[2]});

		assert.equal(boolOMLTrlo, false)
		assert.equal(boolnrQJ6ea, true)
		assert.equal(stringUGz0QvQ, "TPA")
		assert.equal(stringnSX0es, "TPA")
		assert.equal(uint256vhgN0UJ, BigInt("10000000000000000000000000000"))
		assert.equal(uint8f4J6mc, BigInt("18"))
		await expect(TPAhqGQNxT.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const uintNhYVbjX = BigInt("513")
		const addressWVxYGI1 = accounts[2]
		const addressFdPS4v = accounts[4]
		const uintClCOkC = BigInt("125")
		const address8npVCI = accounts[3]
		const addresselifQL = "0x0000000000000000000000000000000000000002"
		const stringnSX0es = await TPAhqGQNxT.symbol.call({from: accounts[4]});
		await TPAhqGQNxT.renounceAdmin.call({from: accounts[4]});
		const uint8f4J6mc = await TPAhqGQNxT.decimals.call({from: accounts[3]});
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolgumxw9M = await TPAhqGQNxT.approve.call(addressWVxYGI1, uintNhYVbjX, {from: accounts[0]});
		const boolOMLTrlo = await TPAhqGQNxT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressFdPS4v, {from: accounts[5]});
		const boolUvpg14H = await TPAhqGQNxT.transfer.call(address8npVCI, uintClCOkC, {from: "0x0000000000000000000000000000000000000001"});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addresselifQL, {from: accounts[2]});

		assert.equal(stringnSX0es, "TPA")
		await expect(TPAhqGQNxT.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const uintqYfEIG = BigInt("1721")
		const uintl4ALLyf = BigInt("201")
		const addressgEaJ6hs = accounts[4]
		const addresskgd4VZ7 = accounts[4]
		const uintMolMXKe = BigInt("125")
		const addressTCg8vCr = accounts[3]
		const uintOFBh9o7 = BigInt("869")
		const address6lmtKk = accounts[4]
		const addressVZH8aE = "0x0000000000000000000000000000000000000002"
		const stringnSX0es = await TPAhqGQNxT.symbol.call({from: accounts[4]});
		const boolwCup1FJ = await TPAhqGQNxT.transferWithLock.call(addressgEaJ6hs, uintl4ALLyf, uintqYfEIG, {from: accounts[4]});
		const uint8f4J6mc = await TPAhqGQNxT.decimals.call({from: accounts[3]});
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOMLTrlo = await TPAhqGQNxT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addresskgd4VZ7, {from: accounts[5]});
		const boolUvpg14H = await TPAhqGQNxT.transfer.call(addressTCg8vCr, uintMolMXKe, {from: "0x0000000000000000000000000000000000000001"});
		const boolnrQJ6ea = await TPAhqGQNxT.approve.call(address6lmtKk, uintOFBh9o7, {from: accounts[1]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addressVZH8aE, {from: accounts[2]});

		assert.equal(boolOMLTrlo, false)
		assert.equal(boolwCup1FJ, true)
		assert.equal(stringUGz0QvQ, "TPA")
		assert.equal(stringnSX0es, "TPA")
		assert.equal(uint256vhgN0UJ, BigInt("10000000000000000000000000000"))
		assert.equal(uint8f4J6mc, BigInt("18"))
		await expect(TPAhqGQNxT.transfer.call(addressTCg8vCr, uintMolMXKe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const uintZ9u8Ja7 = BigInt("563")
		const addressKUHBVYN = accounts[5]
		const uintCgZ7omc = BigInt("1899")
		const addressWNJHCYI = accounts[5]
		const addressMHiIFgz = accounts[5]
		const addressqcZujE4 = "0x0000000000000000000000000000000000000001"
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolVs18KL7 = await TPAhqGQNxT.decreaseAllowance.call(addressKUHBVYN, uintZ9u8Ja7, {from: accounts[3]});
		const boolbXclb98 = await TPAhqGQNxT.decreaseAllowance.call(addressWNJHCYI, uintCgZ7omc, {from: accounts[0]});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressMHiIFgz, {from: accounts[5]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addressqcZujE4, {from: accounts[2]});

		assert.equal(stringUGz0QvQ, "TPA")
		await expect(TPAhqGQNxT.decreaseAllowance.call(addressKUHBVYN, uintZ9u8Ja7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const uintykN01cg = BigInt("1721")
		const uinthokbuyi = BigInt("201")
		const addressYL9TE3 = accounts[4]
		const uintgi2mDTM = BigInt("228")
		const addressNfrh3gP = accounts[3]
		const addresskiP0BxM = accounts[4]
		const uintQQYPJbV = BigInt("125")
		const addressd8WFdv3 = accounts[3]
		const uintSbnbLej = BigInt("869")
		const addressAj9aw9K = accounts[4]
		const addressmmAkZlL = "0x0000000000000000000000000000000000000002"
		const stringnSX0es = await TPAhqGQNxT.symbol.call({from: accounts[4]});
		const boolwCup1FJ = await TPAhqGQNxT.transferWithLock.call(addressYL9TE3, uinthokbuyi, uintykN01cg, {from: accounts[4]});
		const uint8f4J6mc = await TPAhqGQNxT.decimals.call({from: accounts[3]});
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOMLTrlo = await TPAhqGQNxT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jcJOGYf = await TPAhqGQNxT.totalSupply.call({from: accounts[3]});
		const boolMRyYQDP = await TPAhqGQNxT.transfer.call(addressNfrh3gP, uintgi2mDTM, {from: accounts[0]});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addresskiP0BxM, {from: accounts[5]});
		const boolUvpg14H = await TPAhqGQNxT.transfer.call(addressd8WFdv3, uintQQYPJbV, {from: "0x0000000000000000000000000000000000000001"});
		const boolnrQJ6ea = await TPAhqGQNxT.approve.call(addressAj9aw9K, uintSbnbLej, {from: accounts[1]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addressmmAkZlL, {from: accounts[2]});

		assert.equal(boolOMLTrlo, false)
		assert.equal(boolwCup1FJ, true)
		assert.equal(stringUGz0QvQ, "TPA")
		assert.equal(stringnSX0es, "TPA")
		assert.equal(uint256jcJOGYf, BigInt("10000000000000000000000000000"))
		assert.equal(uint8f4J6mc, BigInt("18"))
		await expect(TPAhqGQNxT.transfer.call(addressNfrh3gP, uintgi2mDTM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzAfbmjw = await TPA.new({from: accounts[0]});
		const uinthNKuRA = BigInt("604")
		const addressD4XnzdG = accounts[1]
		const addressR07W6Lb = accounts[1]
		const addressJgINc9Q = accounts[1]
		const addresswt9c6Py = accounts[4]
		const uintPZG30m6 = BigInt("1523")
		const addressZiC0ATq = accounts[3]
		const boolD7j0ief = await TPAzAfbmjw.transferFrom.call(addressR07W6Lb, addressD4XnzdG, uinthNKuRA, {from: accounts[3]});
		const uint256rCCwE0Q = await TPAzAfbmjw.allowance.call(addresswt9c6Py, addressJgINc9Q, {from: accounts[1]});
		const boolLyYIJe7 = await TPAzAfbmjw.increaseAllowance.call(addressZiC0ATq, uintPZG30m6, {from: accounts[1]});

		await expect(TPAzAfbmjw.transferFrom.call(addressR07W6Lb, addressD4XnzdG, uinthNKuRA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addressXfaaLkp = accounts[0]
		const uintL9G1E35 = BigInt("112")
		const uintHZWLHof = BigInt("440")
		const addressswsx4T = accounts[4]
		const addressQp0sYJu = accounts[4]
		const addresstnmLW0Y = "0x0000000000000000000000000000000000000001"
		const uint8f4J6mc = await TPAhqGQNxT.decimals.call({from: accounts[3]});
		const uint256pGcQI67 = await TPAhqGQNxT.balanceOf.call(addressXfaaLkp, {from: accounts[0]});
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ODPwefL = await TPAhqGQNxT.burn.call(uintL9G1E35, {from: accounts[2]});
		const boolOMLTrlo = await TPAhqGQNxT.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmMbPzyn = await TPAhqGQNxT.transfer.call(addressswsx4T, uintHZWLHof, {from: accounts[0]});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressQp0sYJu, {from: accounts[5]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addresstnmLW0Y, {from: accounts[2]});

		assert.equal(stringUGz0QvQ, "TPA")
		assert.equal(uint256pGcQI67, BigInt("0"))
		assert.equal(uint8f4J6mc, BigInt("18"))
		await expect(TPAhqGQNxT.burn.call(uintL9G1E35, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzAfbmjw = await TPA.new({from: accounts[0]});
		const address27RnXt = accounts[1]
		const addressqnf4d67 = accounts[5]
		const uintbNZX7nw = BigInt("497")
		const addressucy8JVP = accounts[3]
		const addresspR7Hgn7 = accounts[5]
		const uint256rCCwE0Q = await TPAzAfbmjw.allowance.call(addressqnf4d67, address27RnXt, {from: accounts[1]});
		const boolLyYIJe7 = await TPAzAfbmjw.increaseAllowance.call(addressucy8JVP, uintbNZX7nw, {from: accounts[1]});
		const boolxKf3Ps6 = await TPAzAfbmjw.freezeAccount.call(addresspR7Hgn7, {from: accounts[3]});

		assert.equal(boolLyYIJe7, true)
		assert.equal(uint256rCCwE0Q, BigInt("0"))
		await expect(TPAzAfbmjw.freezeAccount.call(addresspR7Hgn7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzAfbmjw = await TPA.new({from: accounts[0]});
		const addressDqvxP1Y = accounts[2]
		const addressOelKzaq = accounts[4]
		const addresskRSVTxA = accounts[1]
		const uintOAMba3A = BigInt("770")
		const addressSShZ0lE = accounts[3]
		const uintbE81n9w = BigInt("497")
		const addresscxgvzi = accounts[3]
		const uint256rCCwE0Q = await TPAzAfbmjw.allowance.call(addressOelKzaq, addressDqvxP1Y, {from: accounts[1]});
		const booljEp6ul = await TPAzAfbmjw.unfreezeAccount.call(addresskRSVTxA, {from: accounts[0]});
		const boolh1ObDh1 = await TPAzAfbmjw.decreaseAllowance.call(addressSShZ0lE, uintOAMba3A, {from: "0x0000000000000000000000000000000000000001"});
		const boolLyYIJe7 = await TPAzAfbmjw.increaseAllowance.call(addresscxgvzi, uintbE81n9w, {from: accounts[1]});

		assert.equal(uint256rCCwE0Q, BigInt("0"))
		await expect(TPAzAfbmjw.unfreezeAccount.call(addresskRSVTxA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addresssc40Og4 = "0x00000000000000000000000000000000000000-1"
		const addressz6RH4xK = accounts[2]
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addresssc40Og4, {from: accounts[2]});
		const addressrLH6LGX = await TPAhqGQNxT.addAdmin.call(addressz6RH4xK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAhqGQNxT.addAdmin.call(addresssc40Og4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addressL0MzPa4 = accounts[6]
		const addresswdK5i9E = accounts[4]
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressL0MzPa4, {from: accounts[5]});
		await TPAhqGQNxT.pause.call({from: accounts[4]});
		const uint256iWnWJtE = await TPAhqGQNxT.balanceOf.call(addresswdK5i9E, {from: accounts[0]});

		assert.equal(uint256vhgN0UJ, BigInt("0"))
		await expect(TPAhqGQNxT.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAigSjBf = await TPA.new({from: accounts[1]});
		const addresss6XwQRe = accounts[0]
		const addressqCysyZm = accounts[2]
		const addresshOE9XzW = "0x0000000000000000000000000000000000000001"
		const boolvFvubT9 = await TPAigSjBf.isOwner.call(addresss6XwQRe, {from: accounts[0]});
		const addressJ3OeKh7 = await TPAigSjBf.addAdmin.call(addressqCysyZm, {from: accounts[1]});
		const boolq6RPTz = await TPAigSjBf.unfreezeAccount.call(addresshOE9XzW, {from: accounts[0]});

		assert.equal(boolvFvubT9, false)
		await expect(TPAigSjBf.unfreezeAccount.call(addresshOE9XzW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addressFVzBslK = accounts[2]
		const address628Msf = accounts[2]
		const addressnNURrbZ = accounts[6]
		const uintyBJpKqU = BigInt("939")
		const addressZXPlpQY = accounts[2]
		const addresshurrKpQ = accounts[2]
		const boolgfruzek = await TPAhqGQNxT.freezeAccount.call(addressFVzBslK, {from: accounts[4]});
		const uint256dgfvuOq = await TPAhqGQNxT.balanceOf.call(address628Msf, {from: accounts[1]});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressnNURrbZ, {from: accounts[5]});
		const boolodz8csH = await TPAhqGQNxT.transferFrom.call(addresshurrKpQ, addressZXPlpQY, uintyBJpKqU, {from: accounts[2]});

		assert.equal(boolgfruzek, true)
		assert.equal(uint256dgfvuOq, BigInt("0"))
		assert.equal(uint256vhgN0UJ, BigInt("0"))
		await expect(TPAhqGQNxT.transferFrom.call(addresshurrKpQ, addressZXPlpQY, uintyBJpKqU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const addressILzukGY = accounts[3]
		const uintxcODLT0 = BigInt("361")
		const addressO3tt18X = accounts[4]
		const addressi1ms2AG = accounts[0]
		const uintuzDReC = BigInt("1448")
		const addressTPHJJ21 = accounts[0]
		const addressS9Pt6qV = accounts[2]
		const uintHHfvjUa = BigInt("405")
		const addresscnpy85 = accounts[5]
		const uintI0bh8ZG = BigInt("788")
		const addresszDFwFu = accounts[4]
		const addressom9r6XR = accounts[4]
		const uintQIaimwP = BigInt("1626")
		const addressd6CC5Hk = accounts[4]
		const addressB7pKwrx = "0x0000000000000000000000000000000000000001"
		const uint8f4J6mc = await TPAhqGQNxT.decimals.call({from: accounts[3]});
		const boolCiScjrP = await TPAhqGQNxT.isOwner.call(addressILzukGY, {from: "0x0000000000000000000000000000000000000001"});
		const booldFKavst = await TPAhqGQNxT.unlock.call(addressO3tt18X, uintxcODLT0, {from: accounts[4]});
		const uint256pGcQI67 = await TPAhqGQNxT.balanceOf.call(addressi1ms2AG, {from: accounts[0]});
		const boolMCm4Daz = await TPAhqGQNxT.transferFrom.call(addressS9Pt6qV, addressTPHJJ21, uintuzDReC, {from: accounts[1]});
		const stringUGz0QvQ = await TPAhqGQNxT.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmMbPzyn = await TPAhqGQNxT.transfer.call(addresscnpy85, uintHHfvjUa, {from: accounts[0]});
		const boolHOcyWb8 = await TPAhqGQNxT.approve.call(addresszDFwFu, uintI0bh8ZG, {from: accounts[2]});
		const uint256vhgN0UJ = await TPAhqGQNxT.balanceOf.call(addressom9r6XR, {from: accounts[5]});
		const boolWveIT71 = await TPAhqGQNxT.transfer.call(addressd6CC5Hk, uintQIaimwP, {from: accounts[5]});
		const addressoqnPbP = await TPAhqGQNxT.addAdmin.call(addressB7pKwrx, {from: accounts[2]});

		assert.equal(boolCiScjrP, false)
		assert.equal(uint8f4J6mc, BigInt("18"))
		await expect(TPAhqGQNxT.unlock.call(addressO3tt18X, uintxcODLT0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhqGQNxT = await TPA.new({from: accounts[4]});
		const uintJ89f5uN = BigInt("1761")
		const addresspfnLYU2 = "0x0000000000000000000000000000000000000001"
		const addressZgSxGem = accounts[4]
		const uintd6OnKdA = BigInt("139")
		const addressbrQO4r = accounts[2]
		const boolL0FGMZd = await TPAhqGQNxT.increaseAllowance.call(addresspfnLYU2, uintJ89f5uN, {from: accounts[5]});
		const addresslUaD5wj = await TPAhqGQNxT.transferOwnership.call(addressZgSxGem, {from: accounts[4]});
		const boollUvVUeI = await TPAhqGQNxT.transfer.call(addressbrQO4r, uintd6OnKdA, {from: accounts[3]});

		assert.equal(boolL0FGMZd, true)
		await expect(TPAhqGQNxT.transfer.call(addressbrQO4r, uintd6OnKdA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})