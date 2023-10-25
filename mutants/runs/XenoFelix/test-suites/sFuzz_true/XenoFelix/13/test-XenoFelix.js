const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringMkEvgRA = "WvGkSPB8DYBf2wcasnPOnP8WQAUJFAUzJdtcwhEEbmbQbwidsItVxzNg8WxF5xq58y"
		const stringX8gXWTZ = "7pKaR6eZnm8TSwTfgReaM47PpwXBTSip3KpXDpFmA"
		const uintr4PogaW = BigInt("1")
		const uinttsNT3mm = BigInt("67")
		const XenoFelixPxa9rOo = await XenoFelix.new(stringMkEvgRA, stringX8gXWTZ, uintr4PogaW, uinttsNT3mm, {from: accounts[0]});
		const addressT9qrECG = accounts[1]
		const addressAqySf9f = accounts[2]
		const uintpuhBOob = BigInt("109")
		const addressfU2VxIC = accounts[4]
		const addressBPX4bjI = await XenoFelixPxa9rOo.notFrozenAndTransaction.call(addressAqySf9f, addressT9qrECG, {from: accounts[0]});
		await XenoFelixPxa9rOo.renouncePauser.call({from: accounts[0]});
		const bool8kFEou = await XenoFelixPxa9rOo.increaseAllowance.call(addressfU2VxIC, uintpuhBOob, {from: accounts[1]});

		await expect(XenoFelixPxa9rOo.notFrozenAndTransaction.call(addressAqySf9f, addressT9qrECG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringzpzmNpn = "hFKWhuso65d1MBgNbQMveMD1blCQ8XKswitIFIcYuUJKHKT7BQ1w3ojPgV2GOLFVP8O0blGtv76iHK5xAWydkan"
		const stringxnAbTbN = "d3F93H6igIkqbpYLz1c0QN1WtatdzVShxUmesmispo6X8jK2BkHPoD0rF2s6xcb6F8ZMIuxiuQP8I42"
		const uintSvqzyQI = BigInt("416")
		const uintNLgGfvC = BigInt("115")
		const XenoFelixhjCvx7X = await XenoFelix.new(stringzpzmNpn, stringxnAbTbN, uintSvqzyQI, uintNLgGfvC, {from: "0x0000000000000000000000000000000000000001"});
		const uintMVlTwyv = BigInt("1936")
		const addressWAldCRH = accounts[4]
		const addressHMiMxC5 = accounts[3]
		const address61pvwp = accounts[3]
		const booluHeQuui = await XenoFelixhjCvx7X.transferFrom.call(addressHMiMxC5, addressWAldCRH, uintMVlTwyv, {from: accounts[4]});
		await XenoFelixhjCvx7X.renouncePauser.call({from: accounts[3]});
		const boolkP0US0p = await XenoFelixhjCvx7X.unfreezeAccount.call(address61pvwp, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const string000Yy3 = "CAmCOKlz61XzC4tKIIJBPejngKDfygJwM1WgGcRQ4MDWt6uGWFb51WG5NMTkX959gSqVrwIKK"
		const stringI4sLrcD = "BX7hwYuvY2VSmUbVYEtG"
		const uintcKr0hNG = BigInt("208")
		const XenoFelixhqXd9ur = await XenoFelix.new(string000Yy3, stringI4sLrcD, uintcKr0hNG, {from: accounts[4]});
		const address3KJTP6 = accounts[0]
		const uintVGpR9Gu = BigInt("537")
		const addressDE5Dg2c = accounts[3]
		const addressw65EbcQ = accounts[3]
		const boolMpafxA4 = await XenoFelixhqXd9ur.isPauser.call(address3KJTP6, {from: accounts[2]});
		const boolS5vEC6 = await XenoFelixhqXd9ur.unlock.call(addressDE5Dg2c, uintVGpR9Gu, {from: accounts[3]});
		const addressrQS3gwu = await XenoFelixhqXd9ur.notFrozen.call(addressw65EbcQ, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringtGUfbLf = "Ww4xQFPCb1OqFoWtyXxlbN"
		const stringGCsxB7w = "BMyvsoclOlAHMi6Gziv2eNSJ2BSbM0yx7RjD7z7KzDo9TmzdNF9x876A9V7VPgdFzLv"
		const uintzZWmCvc = BigInt("213")
		const XenoFelixGs2bXsU = await XenoFelix.new(stringtGUfbLf, stringGCsxB7w, uintzZWmCvc, {from: accounts[1]});
		const addressG7lPF6G = accounts[2]
		const uintmDCQop5 = BigInt("1953")
		const uintTJYRYeZ = BigInt("1442")
		const addresstI7yiOL = accounts[1]
		const addressyKC7np0 = await XenoFelixGs2bXsU.notFrozen.call(addressG7lPF6G, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixGs2bXsU.onlyNewOwner.call({from: accounts[1]});
		const boolTOzZBzr = await XenoFelixGs2bXsU.transferWithLock.call(addresstI7yiOL, uintTJYRYeZ, uintmDCQop5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixNhJdfUB = await XenoFelix.new({from: accounts[0]});
		const uintvAEyaiG = BigInt("704")
		const addressD4di72E = accounts[0]
		const uintXGXgmm = BigInt("737")
		const address6gag7h = accounts[5]
		const addressJKaUTjE = accounts[1]
		const uintrzz8Vw5 = BigInt("302")
		const addressR1pCyS = accounts[0]
		const addressI8guWzo = accounts[2]
		const stringsnkrtzV = await XenoFelixNhJdfUB.name.call({from: accounts[4]});
		const boolVJ3D1Xe = await XenoFelixNhJdfUB.transfer.call(addressD4di72E, uintvAEyaiG, {from: accounts[3]});
		const uint256OeF7nHI = await XenoFelixNhJdfUB.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolRF1dlr8 = await XenoFelixNhJdfUB.transferFrom.call(addressJKaUTjE, address6gag7h, uintXGXgmm, {from: accounts[4]});
		const boolsNHhU0h = await XenoFelixNhJdfUB.transfer.call(addressR1pCyS, uintrzz8Vw5, {from: accounts[1]});
		const uint256JaDoNT = await XenoFelixNhJdfUB.balanceOf.call(addressI8guWzo, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringVw1nbeh = "B7loCCGeNCOIjLyJmKxlbUK7LWOWZ1mmJwji8Ef948eDhuhaHhd21PKFKH7K6bqwhSCt0vbkTrmpMdGLQ63e6b0cpd7A"
		const stringBDreTV = "42Bv5tNOcdXuXGlkvV36kdyxQMu9kb2lYJ8LtXAsFfB92e9eTj4XgALS9q5fIL47GZFafbYIhhwvBUzqR6ZCXW2n3Sb4M"
		const uintcZvbTb6 = BigInt("85")
		const XenoFelixr6SnXGl = await XenoFelix.new(stringVw1nbeh, stringBDreTV, uintcZvbTb6, {from: accounts[2]});
		const uintbqfE934 = BigInt("659")
		const addresshKAM7XQ = accounts[0]
		const addressmiu8Ij0 = accounts[5]
		const uintnagd2bp = BigInt("82")
		const uintxKcyDIO = BigInt("962")
		const addressoXzLJUQ = "0x0000000000000000000000000000000000000001"
		const boolomDbHqc = await XenoFelixr6SnXGl.transferFrom.call(addressmiu8Ij0, addresshKAM7XQ, uintbqfE934, {from: accounts[1]});
		const boollvs8jN = await XenoFelixr6SnXGl.transferWithLock.call(addressoXzLJUQ, uintxKcyDIO, uintnagd2bp, {from: accounts[2]});
		await XenoFelixr6SnXGl.onlyPauser.call({from: accounts[3]});
		await XenoFelixr6SnXGl.unpause.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringzmYBbV6 = "127SxIxN"
		const stringwtfUbH = "khruSLGBWpxN4KfqMsJ03N4idWWUxYgRurFNmuO8mi9M5pYm8x1"
		const uintmQezkY = BigInt("132")
		const XenoFelixVUpC2hJ = await XenoFelix.new(stringzmYBbV6, stringwtfUbH, uintmQezkY, {from: accounts[0]});
		const uint8FQiDpb = await XenoFelixVUpC2hJ.decimals.call({from: accounts[4]});
		await XenoFelixVUpC2hJ.onlyPauser.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringMK3aUIq = "drqvsTtTD6JLZSQHsykTWMTfVAxiItUaknnt35BRjsTAPYk8wHY89DyAud8XCtKmzoY37InwMLcWufi8jgqFn"
		const stringTSiFtED = "RIo8RxXaIjUuODVp9wJuqHNTiuUamX4ccVRT82XKau2pJn3mnYGD3Uxo3ssH4uIpzq22EDXsXYjPUUS"
		const uintZ3ZftjT = BigInt("242")
		const XenoFelixyBbN8HZ = await XenoFelix.new(stringMK3aUIq, stringTSiFtED, uintZ3ZftjT, {from: accounts[3]});
		const uintJf1ucMO = BigInt("980")
		const addressHbixlxC = accounts[4]
		const stringO6tvEJa = await XenoFelixyBbN8HZ.symbol.call({from: accounts[2]});
		const uint256kBC6Q4B = await XenoFelixyBbN8HZ.burn.call(uintJf1ucMO, {from: accounts[4]});
		const bool2GhQ0t = await XenoFelixyBbN8HZ.unfreezeAccount.call(addressHbixlxC, {from: accounts[4]});
		const stringxMbWvP8 = await XenoFelixyBbN8HZ.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Tae6QuZ = await XenoFelixyBbN8HZ.totalSupply.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringU6bNEBZ = "GNqe7vQeFkSnckHkJdoVypi7ClfVp5Was4iZrwpE4"
		const stringRi0kcQq = "iETh0n2fdpW5hPurzgVsmdCyMQfMXi4ExxePl88XhSn"
		const uintC1kPpO8 = BigInt("248")
		const uintpoAFQwd = BigInt("44")
		const XenoFelixpUxBUk = await XenoFelix.new(stringU6bNEBZ, stringRi0kcQq, uintC1kPpO8, uintpoAFQwd, {from: accounts[3]});
		const uintVa1tLn = BigInt("1864")
		const addressdtbdChG = accounts[3]
		const uint5du8JM = BigInt("1497")
		const addressYycPHEu = accounts[3]
		const boolberwSAA = await XenoFelixpUxBUk.increaseAllowance.call(addressdtbdChG, uintVa1tLn, {from: accounts[5]});
		await XenoFelixpUxBUk.pause.call({from: accounts[1]});
		const boolulfRXVW = await XenoFelixpUxBUk.transfer.call(addressYycPHEu, uint5du8JM, {from: accounts[4]});

		assert.equal(boolberwSAA, true)
		await expect(XenoFelixpUxBUk.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintJmXvPBo = BigInt("1482")
		const uinteAiclts = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintJmXvPBo, uinteAiclts, {from: accounts[3]});
		const uintnHyLBPO = BigInt("425")
		const addressc0nQaPU = accounts[5]
		const stringry3O7o = await XenoFelixus1HNlb.name.call({from: accounts[3]});
		const addressiy1kjXu = await XenoFelixus1HNlb.burnFrom.call(addressc0nQaPU, uintnHyLBPO, {from: accounts[3]});
		await XenoFelixus1HNlb.unpause.call({from: accounts[5]});

		assert.equal(stringry3O7o, "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ")
		await expect(XenoFelixus1HNlb.burnFrom.call(addressc0nQaPU, uintnHyLBPO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringX0gq0Bl = "7g1mIRnYLXP82jeRv0y"
		const stringcagTqju = "ud8aAue34aBa3JtBNNjkIvgVqWtQbd7ioVCC5a3UD4JoaMpThwlAjKusjl7IawOYglspH"
		const uintVNNfo7L = BigInt("9")
		const XenoFelixADBqbiR = await XenoFelix.new(stringX0gq0Bl, stringcagTqju, uintVNNfo7L, {from: "0x0000000000000000000000000000000000000001"});
		const uint2cXNYa = BigInt("1565")
		const addressNcCTfYL = accounts[1]
		const addressLgCm7Bu = accounts[0]
		const uintjqWvtdh = BigInt("1015")
		const address790OkB = accounts[1]
		const addresszr2TVD = await XenoFelixADBqbiR.burnFrom.call(addressNcCTfYL, uint2cXNYa, {from: accounts[4]});
		const boolOqBFwpu = await XenoFelixADBqbiR.isPauser.call(addressLgCm7Bu, {from: accounts[5]});
		const boolkrF8L5c = await XenoFelixADBqbiR.approve.call(address790OkB, uintjqWvtdh, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uinttPbGzSA = BigInt("1482")
		const uintzQOrl0j = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uinttPbGzSA, uintzQOrl0j, {from: accounts[3]});
		const addressNrOh0nd = accounts[0]
		const addressuUVvsFW = accounts[2]
		const uintivp5riv = BigInt("425")
		const addressyYLrU89 = accounts[6]
		const uint256SNP262g = await XenoFelixus1HNlb.balanceOf.call(addressNrOh0nd, {from: accounts[3]});
		const booldAy2L0I = await XenoFelixus1HNlb.freezeAccount.call(addressuUVvsFW, {from: accounts[4]});
		const addressiy1kjXu = await XenoFelixus1HNlb.burnFrom.call(addressyYLrU89, uintivp5riv, {from: accounts[3]});
		await XenoFelixus1HNlb.unpause.call({from: accounts[5]});

		assert.equal(uint256SNP262g, BigInt("0"))
		await expect(XenoFelixus1HNlb.freezeAccount.call(addressuUVvsFW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintOelvEBs = BigInt("1482")
		const uintLj97KjG = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintOelvEBs, uintLj97KjG, {from: accounts[3]});
		const addressWZJZzPr = accounts[1]
		const uintN6ASEre = BigInt("425")
		const addressmXRgk4n = accounts[6]
		const stringzoxyQq = await XenoFelixus1HNlb.symbol.call({from: accounts[4]});
		const addressBrd11J = await XenoFelixus1HNlb.notFrozen.call(addressWZJZzPr, {from: accounts[4]});
		const addressiy1kjXu = await XenoFelixus1HNlb.burnFrom.call(addressmXRgk4n, uintN6ASEre, {from: accounts[3]});

		assert.equal(stringzoxyQq, "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F")
		await expect(XenoFelixus1HNlb.notFrozen.call(addressWZJZzPr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintuYDOnEJ = BigInt("1482")
		const uintWc9IiwP = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintuYDOnEJ, uintWc9IiwP, {from: accounts[3]});
		const addressT1oX3JB = accounts[0]
		const uintK032sHv = BigInt("755")
		const addressILoR9ZT = accounts[2]
		const uintUpFC3UC = BigInt("1974")
		const addressleC8jY = accounts[0]
		const addressEGyfk7f = accounts[2]
		const uint256SNP262g = await XenoFelixus1HNlb.balanceOf.call(addressT1oX3JB, {from: accounts[3]});
		const boolrBfktvK = await XenoFelixus1HNlb.increaseAllowance.call(addressILoR9ZT, uintK032sHv, {from: accounts[0]});
		const boolBD2SD5L = await XenoFelixus1HNlb.transfer.call(addressleC8jY, uintUpFC3UC, {from: accounts[3]});
		await XenoFelixus1HNlb.onlyNewOwner.call({from: accounts[4]});
		const booldAy2L0I = await XenoFelixus1HNlb.freezeAccount.call(addressEGyfk7f, {from: accounts[4]});
		await XenoFelixus1HNlb.unpause.call({from: accounts[5]});

		assert.equal(boolBD2SD5L, true)
		assert.equal(boolrBfktvK, true)
		assert.equal(uint256SNP262g, BigInt("0"))
		await expect(XenoFelixus1HNlb.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXDNyG2V = "2PvXKJXdquyPXetff2HDYaCtS3kKV1xiD6"
		const stringJeAc4P5 = "kLsJrCo5PWILDd8TIERwKNk1SdURFLtFEBWbGfIKXMBVvlkhfXP4pnIqkllLwrJo96f1Tx2d0GhCbVl5"
		const uintWgUwy2p = BigInt("320")
		const uintQG95LQ0 = BigInt("88")
		const XenoFelixlm4dLLj = await XenoFelix.new(stringXDNyG2V, stringJeAc4P5, uintWgUwy2p, uintQG95LQ0, {from: accounts[0]});
		const addressQKoZHkX = accounts[4]
		const addressYMrke1Z = accounts[3]
		const uint256qo3SKQ = await XenoFelixlm4dLLj.totalSupply.call({from: accounts[2]});
		await XenoFelixlm4dLLj.whenPaused.call({from: accounts[0]});
		await XenoFelixlm4dLLj.whenPaused.call({from: accounts[0]});
		const boolOw94pZG = await XenoFelixlm4dLLj.unfreezeAccount.call(addressQKoZHkX, {from: accounts[0]});
		await XenoFelixlm4dLLj.whenNotPaused.call({from: accounts[0]});
		const uint256be7D5oA = await XenoFelixlm4dLLj.balanceOf.call(addressYMrke1Z, {from: accounts[0]});

		assert.equal(uint256qo3SKQ, BigInt("25798620638840046379445371703306245153334742888977610771037251838217528803328"))
		await expect(XenoFelixlm4dLLj.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintdQUNOPx = BigInt("1482")
		const uintcyQ6ySr = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintdQUNOPx, uintcyQ6ySr, {from: accounts[3]});
		const addressNF2adJh = accounts[0]
		const addressqB8GEB1 = accounts[3]
		const uintAxgQiSi = BigInt("425")
		const addressBgeDV2l = accounts[6]
		await XenoFelixus1HNlb.renouncePauser.call({from: accounts[2]});
		const uint256SNP262g = await XenoFelixus1HNlb.balanceOf.call(addressNF2adJh, {from: accounts[3]});
		const booldAy2L0I = await XenoFelixus1HNlb.freezeAccount.call(addressqB8GEB1, {from: accounts[4]});
		const addressiy1kjXu = await XenoFelixus1HNlb.burnFrom.call(addressBgeDV2l, uintAxgQiSi, {from: accounts[3]});

		await expect(XenoFelixus1HNlb.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintrnQSgYE = BigInt("1482")
		const uinthStIYtQ = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintrnQSgYE, uinthStIYtQ, {from: accounts[3]});
		const addressHjD5XvN = accounts[0]
		const uintouerdKf = BigInt("755")
		const addresssrZsEbc = accounts[3]
		const uintBkdiMh = BigInt("418")
		const uintvhvd7m = BigInt("28")
		const addressvOyflWL = accounts[2]
		const uinttig5OzQ = BigInt("1974")
		const addressdWEdRWY = accounts[0]
		const addressQvOIAY = accounts[2]
		const uint256SNP262g = await XenoFelixus1HNlb.balanceOf.call(addressHjD5XvN, {from: accounts[3]});
		const boolrBfktvK = await XenoFelixus1HNlb.increaseAllowance.call(addresssrZsEbc, uintouerdKf, {from: accounts[0]});
		const uint256GEXxhDI = await XenoFelixus1HNlb.burn.call(uintBkdiMh, {from: accounts[4]});
		const addressBxzrgoi = await XenoFelixus1HNlb.burnFrom.call(addressvOyflWL, uintvhvd7m, {from: accounts[1]});
		const boolBD2SD5L = await XenoFelixus1HNlb.transfer.call(addressdWEdRWY, uinttig5OzQ, {from: accounts[3]});
		await XenoFelixus1HNlb.onlyNewOwner.call({from: accounts[4]});
		const booldAy2L0I = await XenoFelixus1HNlb.freezeAccount.call(addressQvOIAY, {from: accounts[4]});
		await XenoFelixus1HNlb.unpause.call({from: accounts[5]});

		assert.equal(boolrBfktvK, true)
		assert.equal(uint256SNP262g, BigInt("0"))
		await expect(XenoFelixus1HNlb.burn.call(uintBkdiMh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintACcEN52 = BigInt("1482")
		const uintH8KMz5t = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintACcEN52, uintH8KMz5t, {from: accounts[3]});
		const addressJqc4ewM = accounts[1]
		const uintTrHq7ZI = BigInt("597")
		const addressYf58EQH = accounts[2]
		const addressAsb7hU6 = accounts[4]
		const address0IQOVK = accounts[3]
		const uintloizQq = BigInt("425")
		const address85VtOi = accounts[6]
		const uint256SNP262g = await XenoFelixus1HNlb.balanceOf.call(addressJqc4ewM, {from: accounts[3]});
		const boolJZfPJU1 = await XenoFelixus1HNlb.transferFrom.call(addressAsb7hU6, addressYf58EQH, uintTrHq7ZI, {from: accounts[1]});
		const booldAy2L0I = await XenoFelixus1HNlb.freezeAccount.call(address0IQOVK, {from: accounts[4]});
		await XenoFelixus1HNlb.pause.call({from: accounts[2]});
		const addressiy1kjXu = await XenoFelixus1HNlb.burnFrom.call(address85VtOi, uintloizQq, {from: accounts[3]});

		assert.equal(uint256SNP262g, BigInt("0"))
		await expect(XenoFelixus1HNlb.transferFrom.call(addressAsb7hU6, addressYf58EQH, uintTrHq7ZI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintGRyMyd = BigInt("1482")
		const uintNy6eTYg = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintGRyMyd, uintNy6eTYg, {from: accounts[3]});
		const addressnupmNUa = accounts[0]
		const uint1MrS9C = BigInt("768")
		const addressU92Z1M2 = accounts[2]
		const uintbGcTynv = BigInt("425")
		const addressxxpFF9E = accounts[7]
		const uint256SNP262g = await XenoFelixus1HNlb.balanceOf.call(addressnupmNUa, {from: accounts[3]});
		const boolRfqxBEm = await XenoFelixus1HNlb.decreaseAllowance.call(addressU92Z1M2, uint1MrS9C, {from: accounts[2]});
		const addressiy1kjXu = await XenoFelixus1HNlb.burnFrom.call(addressxxpFF9E, uintbGcTynv, {from: accounts[3]});

		assert.equal(uint256SNP262g, BigInt("0"))
		await expect(XenoFelixus1HNlb.decreaseAllowance.call(addressU92Z1M2, uint1MrS9C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintbTFDqKD = BigInt("1482")
		const uintOhQw1Jc = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintbTFDqKD, uintOhQw1Jc, {from: accounts[3]});
		const addresskzxDvxz = accounts[0]
		const addressoMNuMBv = accounts[4]
		const addressxSN2HC = accounts[4]
		const uintWB1uwJc = BigInt("425")
		const addressxP7xlCy = accounts[6]
		const uint256SNP262g = await XenoFelixus1HNlb.balanceOf.call(addresskzxDvxz, {from: accounts[3]});
		const addressetOVGVB = await XenoFelixus1HNlb.addPauser.call(addressoMNuMBv, {from: accounts[3]});
		const booldAy2L0I = await XenoFelixus1HNlb.freezeAccount.call(addressxSN2HC, {from: accounts[4]});
		const addressiy1kjXu = await XenoFelixus1HNlb.burnFrom.call(addressxP7xlCy, uintWB1uwJc, {from: accounts[3]});

		assert.equal(uint256SNP262g, BigInt("0"))
		await expect(XenoFelixus1HNlb.freezeAccount.call(addressxSN2HC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringfZASmKZ = "6Y"
		const stringM9J1fhZ = "8UGcUCE4FOa38pJD6Ybl2gUHogFuldN8EINu2zO7shQhbUVDrlNahk7OXtFD424S397XQrLLEpaFhiIgB"
		const uinthW0Ftlt = BigInt("463")
		const uintwAsBqq8 = BigInt("109")
		const XenoFelixPG1p3Q = await XenoFelix.new(stringfZASmKZ, stringM9J1fhZ, uinthW0Ftlt, uintwAsBqq8, {from: accounts[5]});
		const uintqVOgX3Y = BigInt("1456")
		const addressBmRy8vH = accounts[4]
		const address2bwlql = accounts[4]
		const addressHqGyk6n = accounts[3]
		const uintosOZM25 = BigInt("514")
		const addresszN5gy4T = accounts[2]
		const uintkkT1gtM = BigInt("1527")
		const addressNH9e8pz = accounts[2]
		const boolT7Y3jDn = await XenoFelixPG1p3Q.approve.call(addressBmRy8vH, uintqVOgX3Y, {from: accounts[5]});
		const boolPniD3X8 = await XenoFelixPG1p3Q.isPauser.call(address2bwlql, {from: accounts[3]});
		const boolTqLQnPh = await XenoFelixPG1p3Q.unfreezeAccount.call(addressHqGyk6n, {from: accounts[0]});
		const boolkOIky9 = await XenoFelixPG1p3Q.transfer.call(addresszN5gy4T, uintosOZM25, {from: accounts[3]});
		const boolP5YTl4n = await XenoFelixPG1p3Q.decreaseAllowance.call(addressNH9e8pz, uintkkT1gtM, {from: accounts[0]});

		assert.equal(boolPniD3X8, false)
		assert.equal(boolT7Y3jDn, true)
		await expect(XenoFelixPG1p3Q.unfreezeAccount.call(addressHqGyk6n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringW23C6Nb = "hqpI5FFM7jLhuuBKW6sbtonTXkBbH1SFJSzcanXE5TjN4ooecPdCZ1SVbEp63bldziQ5nhijJVbAzcAMS"
		const stringflQZPW4 = "uqoarnkSGAZpRu7UQxRmlfnTjbCywo"
		const uintAzTuRKt = BigInt("1572")
		const uint949hCG = BigInt("70")
		const XenoFelixFzi00LP = await XenoFelix.new(stringW23C6Nb, stringflQZPW4, uintAzTuRKt, uint949hCG, {from: accounts[2]});
		const uint1doaUn = BigInt("419")
		const addressvVb4YWa = accounts[2]
		const addressCP1S59 = accounts[3]
		const addresstvaq8Wf = accounts[4]
		const uinthhUUPQF = BigInt("1893")
		const addresslxlrTtl = accounts[4]
		const addressg6dWfvr = accounts[4]
		const uintNPWMFXu = BigInt("764")
		const addressQOAXdAF = accounts[2]
		const addressGFlsVOs = accounts[0]
		const booloonyu2D = await XenoFelixFzi00LP.increaseAllowance.call(addressvVb4YWa, uint1doaUn, {from: accounts[2]});
		const uint256f5cAcx4 = await XenoFelixFzi00LP.allowance.call(addresstvaq8Wf, addressCP1S59, {from: accounts[1]});
		const boolD7CzHn8 = await XenoFelixFzi00LP.transferFrom.call(addressg6dWfvr, addresslxlrTtl, uinthhUUPQF, {from: accounts[3]});
		const stringgPCFpNQ = await XenoFelixFzi00LP.symbol.call({from: accounts[4]});
		const boolrQ6MLPo = await XenoFelixFzi00LP.transferFrom.call(addressGFlsVOs, addressQOAXdAF, uintNPWMFXu, {from: accounts[5]});
		const boolFxkH9Z2 = await XenoFelixFzi00LP.paused.call({from: accounts[4]});

		assert.equal(booloonyu2D, true)
		assert.equal(uint256f5cAcx4, BigInt("0"))
		await expect(XenoFelixFzi00LP.transferFrom.call(addressg6dWfvr, addresslxlrTtl, uinthhUUPQF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringTHBV9Io = "cuibQB3VYjTiWmcv391XmrnOgN874CwHfBrlySBaDByNkDYfGMvKlMQdRAy1"
		const stringC2hMMWr = "8dc9WHepyrxvU9IofkdOb9dpj3rjNIXBGGS93n4B3tGDfRNgNfear171zUYDkQNWq"
		const uintxLswRvK = BigInt("162")
		const XenoFelixDO8I3Ic = await XenoFelix.new(stringTHBV9Io, stringC2hMMWr, uintxLswRvK, {from: accounts[5]});
		const booldfRW59H = await XenoFelixDO8I3Ic.paused.call({from: accounts[4]});
		const stringQJ85zD6 = await XenoFelixDO8I3Ic.name.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintYe7pl9z = BigInt("1482")
		const uintI4Xb0lf = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintYe7pl9z, uintI4Xb0lf, {from: accounts[3]});
		const addressm61NoWa = accounts[2]
		const uintq5hLNVt = BigInt("2045")
		const uintq6dWPLP = BigInt("291")
		const address3efemG = accounts[1]
		const uintgfROLHw = BigInt("1613")
		const addresshH6Bxtp = accounts[5]
		const addressgvWtOe = "0x0000000000000000000000000000000000000001"
		const boolTJIj7fo = await XenoFelixus1HNlb.isOwner.call(addressm61NoWa, {from: accounts[2]});
		const boolWBLXtFe = await XenoFelixus1HNlb.lock.call(address3efemG, uintq6dWPLP, uintq5hLNVt, {from: accounts[3]});
		const boolYfPHUx = await XenoFelixus1HNlb.transferFrom.call(addressgvWtOe, addresshH6Bxtp, uintgfROLHw, {from: accounts[1]});

		assert.equal(boolTJIj7fo, false)
		await expect(XenoFelixus1HNlb.lock.call(address3efemG, uintq6dWPLP, uintq5hLNVt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringfZASmKZ = "6Y"
		const stringM9J1fhZ = "8UGcUCE4FOa38pJD6Ybl2gUHogFuldN8EINu2zO7shQhbUVDrlNahk7OXtFD424S397XQrLLEpaFhiIgB"
		const uintq164ef = BigInt("463")
		const uintPRGHoZG = BigInt("109")
		const XenoFelixPG1p3Q = await XenoFelix.new(stringfZASmKZ, stringM9J1fhZ, uintq164ef, uintPRGHoZG, {from: accounts[5]});
		const uintXYIopeF = BigInt("514")
		const addressfODPkrP = accounts[1]
		const booljThzc3L = await XenoFelixPG1p3Q.paused.call({from: accounts[4]});
		const boolkOIky9 = await XenoFelixPG1p3Q.transfer.call(addressfODPkrP, uintXYIopeF, {from: accounts[3]});

		assert.equal(booljThzc3L, false)
		await expect(XenoFelixPG1p3Q.transfer.call(addressfODPkrP, uintXYIopeF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintyji7S36 = BigInt("1482")
		const uintedKFkn1 = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintyji7S36, uintedKFkn1, {from: accounts[3]});
		const addressUPLI3Vf = accounts[1]
		const uint256SNP262g = await XenoFelixus1HNlb.balanceOf.call(addressUPLI3Vf, {from: accounts[3]});
		const uint8JSjpdtu = await XenoFelixus1HNlb.decimals.call({from: accounts[4]});

		assert.equal(uint256SNP262g, BigInt("0"))
		assert.equal(uint8JSjpdtu, BigInt("27"))
	});

	it('test for XenoFelix', async () => {
		const stringfZASmKZ = "6Y"
		const stringM9J1fhZ = "8UGcUCE4FOa38pJD6Ybl2gUHogFuldN8EINu2zO7shQhbUVDrlNahk7OXtFD424S397XQrLLEpaFhiIgB"
		const uintTca78RD = BigInt("463")
		const uintSIkiWA = BigInt("109")
		const XenoFelixPG1p3Q = await XenoFelix.new(stringfZASmKZ, stringM9J1fhZ, uintTca78RD, uintSIkiWA, {from: accounts[5]});
		const uintpE9AEqq = BigInt("1615")
		const uintWdBiWtR = BigInt("918")
		const addressd8H9Xue = accounts[2]
		const uintfR72v3h = BigInt("511")
		const addressC1wt8S5 = accounts[1]
		const boolAgWY4mC = await XenoFelixPG1p3Q.transferWithLock.call(addressd8H9Xue, uintWdBiWtR, uintpE9AEqq, {from: accounts[5]});
		const boolkOIky9 = await XenoFelixPG1p3Q.transfer.call(addressC1wt8S5, uintfR72v3h, {from: accounts[3]});

		assert.equal(boolAgWY4mC, true)
		await expect(XenoFelixPG1p3Q.transfer.call(addressC1wt8S5, uintfR72v3h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsppuwPK = "QrkSZfGGmTdUjS1lQOA9HVTiK2lXujEjotOxu3RpxtVrpwVCBJ"
		const stringRwheY2l = "IqDjr7l1j5lxfN8r5g7gBUNqf8E0mFDRLNjRKa9bRXyGBM8pIvZpglnaeekJAHHE2McwHorWuBcxVWC74F"
		const uintBMVF3yJ = BigInt("1482")
		const uintQuUnLu = BigInt("27")
		const XenoFelixus1HNlb = await XenoFelix.new(stringsppuwPK, stringRwheY2l, uintBMVF3yJ, uintQuUnLu, {from: accounts[3]});
		const uintZRTCH8o = BigInt("1936")
		const addressTG4ghFB = accounts[3]
		const uinthEyDIs4 = BigInt("1630")
		const addressBOK0Vi9 = accounts[5]
		const addressXRwZc9U = "0x0000000000000000000000000000000000000001"
		const boolzPdQ2oL = await XenoFelixus1HNlb.unlock.call(addressTG4ghFB, uintZRTCH8o, {from: accounts[3]});
		const boolYfPHUx = await XenoFelixus1HNlb.transferFrom.call(addressXRwZc9U, addressBOK0Vi9, uinthEyDIs4, {from: accounts[1]});
		const uint8VRzYzyA = await XenoFelixus1HNlb.decimals.call({from: accounts[0]});

		await expect(XenoFelixus1HNlb.unlock.call(addressTG4ghFB, uintZRTCH8o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})