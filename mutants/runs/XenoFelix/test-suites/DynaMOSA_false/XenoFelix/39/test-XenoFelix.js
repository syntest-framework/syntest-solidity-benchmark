const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixLe2s4UY = await XenoFelix.new({from: accounts[4]});
		const addressVaQ6wIn = accounts[2]
		const addressICTDRE = accounts[1]
		const boolWcYcSDh = await XenoFelixLe2s4UY.isPauser.call(addressVaQ6wIn, {from: accounts[3]});
		await XenoFelixLe2s4UY.renouncePauser.call({from: accounts[1]});
		const boolHsoO23c = await XenoFelixLe2s4UY.freezeAccount.call(addressICTDRE, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringYfyZkgh = "Nyyh4c8xTK0i9xclxvwcUDOP9gnjOH51mVLfHbOA3LvpGtavJW6Dt91Oc"
		const stringHla6T2V = "2S489xxAhC8bnXrBVBs5fa3DxmBHytT0iT1B5kCSaVG"
		const uintB1mf1f2 = BigInt("254")
		const XenoFelixv0BZDXG = await XenoFelix.new(stringYfyZkgh, stringHla6T2V, uintB1mf1f2, {from: accounts[5]});
		const uintcIMrNo = BigInt("174")
		const addressoHthhME = accounts[0]
		const addressJlsxuBF = accounts[3]
		await XenoFelixv0BZDXG.onlyPauser.call({from: accounts[3]});
		const booljUaPxl9 = await XenoFelixv0BZDXG.transferFrom.call(addressJlsxuBF, addressoHthhME, uintcIMrNo, {from: accounts[1]});
		const boolDFoQfPR = await XenoFelixv0BZDXG.acceptOwnership.call({from: accounts[4]});
		await XenoFelixv0BZDXG.pause.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintgCWDmbV = BigInt("1222")
		const uintsKcq1Y = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintgCWDmbV, uintsKcq1Y, {from: accounts[5]});
		const uintbBflNP7 = BigInt("1545")
		const addressGEanSV6 = accounts[1]
		const uintXpnRtAF = BigInt("628")
		const addressvP29Ua = accounts[1]
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		await XenoFelixk3Y39w2.unpause.call({from: accounts[1]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressGEanSV6, uintbBflNP7, {from: "0x0000000000000000000000000000000000000001"});
		const stringRi2RuwG = await XenoFelixk3Y39w2.symbol.call({from: accounts[2]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressvP29Ua, uintXpnRtAF, {from: accounts[3]});

		assert.equal(stringHfGB8Pm, "f1azQ71GzWcqAF9hbHY1")
		assert.equal(uint256cGX1Hmm, BigInt("35069242110349820531357319372216234510440082330105975939672687350842942029824"))
		await expect(XenoFelixk3Y39w2.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiVRUTSB = "26fUqnOq2W5e1Cr6bHwur3EzwaFWpKl8hKNqA4AGun9Gbmzd5lIsclHqG0VW2Yt4jqQ5v0rXjYxaruUujWmCFzglQFQ2dcVx"
		const stringZsIevb = "7GwNIegknsjAdIagqIflV7wBdUrBtcWvJoFjTZJVn"
		const uintUo8XhiB = BigInt("71")
		const XenoFelixYydcNy4 = await XenoFelix.new(stringiVRUTSB, stringZsIevb, uintUo8XhiB, {from: accounts[2]});
		const uintBV9rxsY = BigInt("1606")
		const addressvrgxWpu = accounts[0]
		const stringk4u7sD = await XenoFelixYydcNy4.symbol.call({from: accounts[1]});
		const boolZerfUs4 = await XenoFelixYydcNy4.decreaseAllowance.call(addressvrgxWpu, uintBV9rxsY, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringixIjr4l = "P9"
		const stringU2AAdVb = "vM5i"
		const uintRVdBWa = BigInt("119")
		const XenoFelixAlPFqq1 = await XenoFelix.new(stringixIjr4l, stringU2AAdVb, uintRVdBWa, {from: accounts[0]});
		const addressR2wY8dI = accounts[0]
		const uintknDDTVD = BigInt("1794")
		const addresspSbRKLZ = accounts[4]
		const uintd7bhuUj = BigInt("271")
		const addressxn5QJQq = accounts[1]
		const addressjHSegyx = accounts[0]
		const uintrcqtDfw = BigInt("263")
		const addressVDiDxzm = accounts[2]
		const boolpeNn8w4 = await XenoFelixAlPFqq1.freezeAccount.call(addressR2wY8dI, {from: accounts[0]});
		const boolBzgH5ry = await XenoFelixAlPFqq1.increaseAllowance.call(addresspSbRKLZ, uintknDDTVD, {from: accounts[3]});
		const booltamITt = await XenoFelixAlPFqq1.increaseAllowance.call(addressxn5QJQq, uintd7bhuUj, {from: "0x0000000000000000000000000000000000000001"});
		const boolQdzk27h = await XenoFelixAlPFqq1.unfreezeAccount.call(addressjHSegyx, {from: accounts[1]});
		const boolPaxQQ57 = await XenoFelixAlPFqq1.transfer.call(addressVDiDxzm, uintrcqtDfw, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringDzFMywc = "IYF9I5dP2jkKd5CstGCdb4BBy7N8CHfc14tUvIqWwaQAj3C5chxzDb4pn5sN3B55HiQKVpQpp8IkTKXs8DCnzJvxjoWYFg6C2"
		const stringRMmiVcu = "6XS6ilxGbGym7z1uQxuXrkNBfFY4XzEsz9G45jjSnKvHJ6vwxp2XMKA"
		const uintW9Ee6EF = BigInt("92")
		const XenoFelixDunfaiD = await XenoFelix.new(stringDzFMywc, stringRMmiVcu, uintW9Ee6EF, {from: accounts[3]});
		const addressp6Tpy4p = accounts[5]
		const uintenHTmcB = BigInt("1160")
		const addressCUhkby8 = accounts[3]
		await XenoFelixDunfaiD.onlyPauser.call({from: accounts[3]});
		await XenoFelixDunfaiD.onlyOwner.call({from: accounts[3]});
		const boolChiK4Bb = await XenoFelixDunfaiD.freezeAccount.call(addressp6Tpy4p, {from: accounts[5]});
		const boolNQfxAWV = await XenoFelixDunfaiD.transfer.call(addressCUhkby8, uintenHTmcB, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringyQIG756 = "WM9vtCNESoahWxfyNLmDOKGYkRhxyu2HqU1B5I71wOeF9odJQYEknnHvsjtef2OBJ2"
		const stringkcO14D4 = "z7rWBgHBLSct1gyu7mUMUyjMq4aAkyl2gd9JhvxVEwa6xtnCKPt5AP"
		const uintEn7Fqn = BigInt("1132")
		const uintSxs1gE4 = BigInt("92")
		const XenoFelix1BiCt6 = await XenoFelix.new(stringyQIG756, stringkcO14D4, uintEn7Fqn, uintSxs1gE4, {from: accounts[2]});
		const uintCQra037 = BigInt("1527")
		const addressaVpTiw = accounts[1]
		const addressqxNB62a = await XenoFelix1BiCt6.burnFrom.call(addressaVpTiw, uintCQra037, {from: "0x0000000000000000000000000000000000000001"});
		const uint8on4fUb = await XenoFelix1BiCt6.decimals.call({from: accounts[2]});

		await expect(XenoFelix1BiCt6.burnFrom.call(addressaVpTiw, uintCQra037, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintJSyDgRP = BigInt("1222")
		const uintyiQagMS = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintJSyDgRP, uintyiQagMS, {from: accounts[5]});
		const uintVGiC3Kk = BigInt("1545")
		const addressTLmvoYz = accounts[1]
		const uintXr3v6Y1 = BigInt("628")
		const addressV2Vx6WO = accounts[1]
		const addressRpafQi6 = accounts[1]
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressTLmvoYz, uintVGiC3Kk, {from: "0x0000000000000000000000000000000000000001"});
		const stringRi2RuwG = await XenoFelixk3Y39w2.symbol.call({from: accounts[2]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressV2Vx6WO, uintXr3v6Y1, {from: accounts[3]});
		const addressUpk3ER = await XenoFelixk3Y39w2.removePauser.call(addressRpafQi6, {from: accounts[1]});

		assert.equal(boolS5sXkXR, true)
		assert.equal(stringHfGB8Pm, "f1azQ71GzWcqAF9hbHY1")
		assert.equal(stringRi2RuwG, "efrF64MvJCsPf1BdRKLw")
		assert.equal(uint256cGX1Hmm, BigInt("35069242110349820531357319372216234510440082330105975939672687350842942029824"))
		await expect(XenoFelixk3Y39w2.transfer.call(addressV2Vx6WO, uintXr3v6Y1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcZuSeW = "1NbNNZhlT13"
		const string6zqmOm = "HUrvsv6tigijSBpjhPGdwwcMNEqc1gAdY24fRjW3HXDPe7xakDwBMNo4gj6mM1mJmjFR13DWeSlYXn14Cl8"
		const uintQTNxqh9 = BigInt("56")
		const XenoFelixgu8FXWO = await XenoFelix.new(stringcZuSeW, string6zqmOm, uintQTNxqh9, {from: accounts[4]});
		const addressnGIcxNB = accounts[2]
		const uintO3Qu1HT = BigInt("375")
		const uintWRAWegt = BigInt("493")
		const addresszlE1Wak = accounts[1]
		const uintIw4TpqE = BigInt("1967")
		const addressLC3MSLe = accounts[0]
		const addresskuBjxB = accounts[4]
		const addressX4hGIX0 = accounts[3]
		const addressx73gg0 = await XenoFelixgu8FXWO.removePauser.call(addressnGIcxNB, {from: accounts[2]});
		await XenoFelixgu8FXWO.renouncePauser.call({from: accounts[2]});
		const boolNWYsljB = await XenoFelixgu8FXWO.lock.call(addresszlE1Wak, uintWRAWegt, uintO3Qu1HT, {from: accounts[5]});
		const boolfx3sPGc = await XenoFelixgu8FXWO.transferFrom.call(addresskuBjxB, addressLC3MSLe, uintIw4TpqE, {from: accounts[1]});
		await XenoFelixgu8FXWO.unpause.call({from: accounts[1]});
		const uint256hbeVDzt = await XenoFelixgu8FXWO.balanceOf.call(addressX4hGIX0, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintLeRr2uM = BigInt("1222")
		const uintDspGIs = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintLeRr2uM, uintDspGIs, {from: accounts[5]});
		const uintzl1sgF8 = BigInt("628")
		const addresshhE9Prg = accounts[1]
		const addresshLhupL = accounts[1]
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		await XenoFelixk3Y39w2.onlyPauser.call({from: accounts[0]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		await XenoFelixk3Y39w2.unpause.call({from: accounts[1]});
		const stringRi2RuwG = await XenoFelixk3Y39w2.symbol.call({from: accounts[2]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addresshhE9Prg, uintzl1sgF8, {from: accounts[3]});
		const addressUpk3ER = await XenoFelixk3Y39w2.removePauser.call(addresshLhupL, {from: accounts[1]});

		assert.equal(stringHfGB8Pm, "f1azQ71GzWcqAF9hbHY1")
		await expect(XenoFelixk3Y39w2.onlyPauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintmaLPWZa = BigInt("1222")
		const uintSd22OBd = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintmaLPWZa, uintSd22OBd, {from: accounts[5]});
		const addressQxm2Oui = "0x0000000000000000000000000000000000000001"
		const addressXk3vel6 = accounts[0]
		const uinttFuOC7b = BigInt("1049")
		const addressJyKcuwN = accounts[3]
		const uintqUh5Q2Y = BigInt("1545")
		const address22QwaO = accounts[2]
		const uintDKFMnAj = BigInt("115")
		const addressR2OKKpH = accounts[2]
		const uintfksHp1 = BigInt("540")
		const addressj2GXNrE = accounts[3]
		const uintCt9VAAU = BigInt("628")
		const addressAdb7tmr = accounts[1]
		const addressHftKps = accounts[1]
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		const uint256RqbCtpj = await XenoFelixk3Y39w2.allowance.call(addressXk3vel6, addressQxm2Oui, {from: accounts[3]});
		await XenoFelixk3Y39w2.unpause.call({from: accounts[1]});
		const boolkjfdJ21 = await XenoFelixk3Y39w2.decreaseAllowance.call(addressJyKcuwN, uinttFuOC7b, {from: accounts[2]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(address22QwaO, uintqUh5Q2Y, {from: "0x0000000000000000000000000000000000000001"});
		const boolm4VRsKC = await XenoFelixk3Y39w2.decreaseAllowance.call(addressR2OKKpH, uintDKFMnAj, {from: accounts[1]});
		const stringRi2RuwG = await XenoFelixk3Y39w2.symbol.call({from: accounts[2]});
		const boolARvVhDY = await XenoFelixk3Y39w2.approve.call(addressj2GXNrE, uintfksHp1, {from: accounts[2]});
		await XenoFelixk3Y39w2.pause.call({from: accounts[3]});
		await XenoFelixk3Y39w2.unpause.call({from: accounts[0]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressAdb7tmr, uintCt9VAAU, {from: accounts[3]});
		await XenoFelixk3Y39w2.onlyPauser.call({from: accounts[4]});
		const addressUpk3ER = await XenoFelixk3Y39w2.removePauser.call(addressHftKps, {from: accounts[1]});

		assert.equal(stringHfGB8Pm, "f1azQ71GzWcqAF9hbHY1")
		assert.equal(uint256RqbCtpj, BigInt("0"))
		assert.equal(uint256cGX1Hmm, BigInt("35069242110349820531357319372216234510440082330105975939672687350842942029824"))
		await expect(XenoFelixk3Y39w2.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintk4LrnUD = BigInt("1222")
		const uintG93WmkV = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintk4LrnUD, uintG93WmkV, {from: accounts[5]});
		const uint6l9zWc = BigInt("1781")
		const addressYVKeL7 = accounts[5]
		const addressHV7Dlvb = accounts[1]
		const uintsowJkUL = BigInt("1538")
		const addressomcfqRU = accounts[1]
		const uintmeJGTt6 = BigInt("628")
		const addressjED9OM = accounts[1]
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		const boolwGvcnel = await XenoFelixk3Y39w2.transferFrom.call(addressHV7Dlvb, addressYVKeL7, uint6l9zWc, {from: accounts[4]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressomcfqRU, uintsowJkUL, {from: "0x0000000000000000000000000000000000000001"});
		const stringRi2RuwG = await XenoFelixk3Y39w2.symbol.call({from: accounts[2]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressjED9OM, uintmeJGTt6, {from: accounts[3]});

		assert.equal(stringHfGB8Pm, "f1azQ71GzWcqAF9hbHY1")
		await expect(XenoFelixk3Y39w2.transferFrom.call(addressHV7Dlvb, addressYVKeL7, uint6l9zWc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintZgeruEV = BigInt("1222")
		const uintfYqYMzm = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintZgeruEV, uintfYqYMzm, {from: accounts[5]});
		const uinttv6sWpk = BigInt("1595")
		const uintEDz09mE = BigInt("1441")
		const addressF4tp99K = accounts[4]
		const addressLRxcnnh = accounts[0]
		const uintdc89MVI = BigInt("1545")
		const addressVCkZJB9 = accounts[1]
		const uintGRtMN3c = BigInt("628")
		const addressu7Bro58 = accounts[1]
		const boolbj2B5c = await XenoFelixk3Y39w2.lock.call(addressF4tp99K, uintEDz09mE, uinttv6sWpk, {from: accounts[5]});
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		await XenoFelixk3Y39w2.unpause.call({from: accounts[1]});
		const uint256rl1z7uo = await XenoFelixk3Y39w2.balanceOf.call(addressLRxcnnh, {from: accounts[2]});
		const stringhEAsP5y = await XenoFelixk3Y39w2.name.call({from: accounts[0]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressVCkZJB9, uintdc89MVI, {from: "0x0000000000000000000000000000000000000001"});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressu7Bro58, uintGRtMN3c, {from: accounts[3]});

		await expect(XenoFelixk3Y39w2.lock.call(addressF4tp99K, uintEDz09mE, uinttv6sWpk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintTqWrLQW = BigInt("1222")
		const uintFtzFQmI = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintTqWrLQW, uintFtzFQmI, {from: accounts[5]});
		const uintOcG7lZ = BigInt("1570")
		const addressgjj4o0s = accounts[1]
		const uintpK52e5q = BigInt("628")
		const addressoTynqEH = accounts[2]
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		const uint8IwBfx8F = await XenoFelixk3Y39w2.decimals.call({from: accounts[1]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressgjj4o0s, uintOcG7lZ, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixk3Y39w2.pause.call({from: accounts[3]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressoTynqEH, uintpK52e5q, {from: accounts[3]});

		assert.equal(boolS5sXkXR, true)
		assert.equal(stringHfGB8Pm, "f1azQ71GzWcqAF9hbHY1")
		assert.equal(uint256cGX1Hmm, BigInt("35069242110349820531357319372216234510440082330105975939672687350842942029824"))
		assert.equal(uint8IwBfx8F, BigInt("203"))
		await expect(XenoFelixk3Y39w2.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringmx8ZXp = "d3vKHifsEpWwo8n9YzpNt2"
		const stringyrTUmFo = "xVIAcamtfMhyK7lgmfBX57c0J1F12h4TcqZvKAr5AthU2PF9Scsc4atUimXfGzAAfcKa81u9NW"
		const uinttfo8yTn = BigInt("969")
		const uintCbrOGdy = BigInt("226")
		const XenoFelixhir0F2P = await XenoFelix.new(stringmx8ZXp, stringyrTUmFo, uinttfo8yTn, uintCbrOGdy, {from: accounts[4]});
		const uintNgTUaSV = BigInt("1670")
		const uintKMH2S6w = BigInt("1055")
		const addresshpToBCT = accounts[4]
		const addressqdmjxDq = accounts[4]
		const uintiBBx0aj = BigInt("1113")
		const addressh3ZFZ81 = accounts[4]
		const uintcx03kPA = BigInt("1621")
		const addressfPJbqb0 = accounts[5]
		const uint256SryHQ7k = await XenoFelixhir0F2P.burn.call(uintNgTUaSV, {from: accounts[1]});
		const boolwrR71nU = await XenoFelixhir0F2P.transferFrom.call(addressqdmjxDq, addresshpToBCT, uintKMH2S6w, {from: accounts[0]});
		const uint256nNBCCfo = await XenoFelixhir0F2P.totalSupply.call({from: accounts[0]});
		const boolHg4ORnj = await XenoFelixhir0F2P.transfer.call(addressh3ZFZ81, uintiBBx0aj, {from: "0x0000000000000000000000000000000000000001"});
		const boolM4Q0A6s = await XenoFelixhir0F2P.unlock.call(addressfPJbqb0, uintcx03kPA, {from: accounts[1]});

		await expect(XenoFelixhir0F2P.burn.call(uintNgTUaSV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintiYSN6FZ = BigInt("1222")
		const uintKeU99Ou = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintiYSN6FZ, uintKeU99Ou, {from: accounts[5]});
		const uintuY9AjAA = BigInt("1639")
		const addressUxh2GeT = accounts[2]
		const uintf8ByaX = BigInt("1575")
		const addressNgPonQq = accounts[1]
		const uintWKrium = BigInt("628")
		const addressnftm8VI = accounts[1]
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		const boolr7MUtJ = await XenoFelixk3Y39w2.decreaseAllowance.call(addressUxh2GeT, uintuY9AjAA, {from: accounts[0]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressNgPonQq, uintf8ByaX, {from: "0x0000000000000000000000000000000000000001"});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressnftm8VI, uintWKrium, {from: accounts[3]});

		assert.equal(uint256cGX1Hmm, BigInt("35069242110349820531357319372216234510440082330105975939672687350842942029824"))
		await expect(XenoFelixk3Y39w2.decreaseAllowance.call(addressUxh2GeT, uintuY9AjAA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintNOzUuuB = BigInt("1222")
		const uinto33knkO = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintNOzUuuB, uinto33knkO, {from: accounts[5]});
		const addressiFJCN3f = accounts[0]
		const uintpCfNYbr = BigInt("1499")
		const uintei2QsDe = BigInt("1868")
		const addressKFolUdH = accounts[1]
		const uintaMrIfBS = BigInt("1545")
		const addressJa9pAZ6 = accounts[1]
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		const uint256SgLbf8 = await XenoFelixk3Y39w2.balanceOf.call(addressiFJCN3f, {from: accounts[2]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		const booln1bTPeg = await XenoFelixk3Y39w2.lock.call(addressKFolUdH, uintei2QsDe, uintpCfNYbr, {from: accounts[1]});
		await XenoFelixk3Y39w2.unpause.call({from: accounts[1]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressJa9pAZ6, uintaMrIfBS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringHfGB8Pm, "f1azQ71GzWcqAF9hbHY1")
		assert.equal(uint256SgLbf8, BigInt("0"))
		assert.equal(uint256cGX1Hmm, BigInt("35069242110349820531357319372216234510440082330105975939672687350842942029824"))
		await expect(XenoFelixk3Y39w2.lock.call(addressKFolUdH, uintei2QsDe, uintpCfNYbr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintWct0Z4h = BigInt("1222")
		const uintKaqHAg9 = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintWct0Z4h, uintKaqHAg9, {from: accounts[5]});
		const uintR91EEuW = BigInt("1575")
		const addressJMVAOaq = accounts[2]
		const uintuMFtEEh = BigInt("1737")
		const addressrRrrxrC = accounts[0]
		const uintdfpmbxP = BigInt("628")
		const addressJodr1To = accounts[1]
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		await XenoFelixk3Y39w2.renouncePauser.call({from: accounts[0]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressJMVAOaq, uintR91EEuW, {from: "0x0000000000000000000000000000000000000001"});
		const boolz7pEz74 = await XenoFelixk3Y39w2.transfer.call(addressrRrrxrC, uintuMFtEEh, {from: accounts[4]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressJodr1To, uintdfpmbxP, {from: accounts[3]});

		assert.equal(uint256cGX1Hmm, BigInt("35069242110349820531357319372216234510440082330105975939672687350842942029824"))
		await expect(XenoFelixk3Y39w2.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringasOcQFS = "2LaEgm1LnqVeWbtCkBXC6cJj6cJGcHBmaB7eLvpJeYTweWxAPKuauXpdMsrK7TsO1bYEe"
		const stringxhR2TRI = "aNxfR"
		const uintxsLmiMS = BigInt("59")
		const XenoFelixqymVk6A = await XenoFelix.new(stringasOcQFS, stringxhR2TRI, uintxsLmiMS, {from: "0x0000000000000000000000000000000000000001"});
		const uintZVn4qck = BigInt("1547")
		const addressHv3hIDK = accounts[4]
		const uintbVeq5mj = BigInt("1649")
		const addressTthO3Bl = accounts[3]
		const booltLkZQC8 = await XenoFelixqymVk6A.decreaseAllowance.call(addressHv3hIDK, uintZVn4qck, {from: accounts[4]});
		const boollU6omWD = await XenoFelixqymVk6A.unlock.call(addressTthO3Bl, uintbVeq5mj, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintDwYnAd = BigInt("1222")
		const uintORmxa5F = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintDwYnAd, uintORmxa5F, {from: accounts[5]});
		const uintyMUeQOl = BigInt("302")
		const addresss5A134q = accounts[1]
		const addressMnuh9Qa = accounts[1]
		const uintTWmn7q = BigInt("1499")
		const uintlI5cAOu = BigInt("1868")
		const addressmSs1KI = accounts[1]
		const uintf6Of0oD = BigInt("1545")
		const addressW8EQlSn = accounts[1]
		const stringHfGB8Pm = await XenoFelixk3Y39w2.name.call({from: accounts[3]});
		const boola5OucmN = await XenoFelixk3Y39w2.increaseAllowance.call(addresss5A134q, uintyMUeQOl, {from: accounts[2]});
		const uint256SgLbf8 = await XenoFelixk3Y39w2.balanceOf.call(addressMnuh9Qa, {from: accounts[2]});
		const uint256cGX1Hmm = await XenoFelixk3Y39w2.totalSupply.call({from: accounts[2]});
		const booln1bTPeg = await XenoFelixk3Y39w2.lock.call(addressmSs1KI, uintlI5cAOu, uintTWmn7q, {from: accounts[1]});
		await XenoFelixk3Y39w2.unpause.call({from: accounts[1]});
		const boolS5sXkXR = await XenoFelixk3Y39w2.approve.call(addressW8EQlSn, uintf6Of0oD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boola5OucmN, true)
		assert.equal(stringHfGB8Pm, "f1azQ71GzWcqAF9hbHY1")
		assert.equal(uint256SgLbf8, BigInt("0"))
		assert.equal(uint256cGX1Hmm, BigInt("35069242110349820531357319372216234510440082330105975939672687350842942029824"))
		await expect(XenoFelixk3Y39w2.lock.call(addressmSs1KI, uintlI5cAOu, uintTWmn7q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringGrW5tJI = "mfijKCIhUoYjMJ"
		const stringuX7RH0K = "aNLuHSLYL0piAx1rjynX1abKrDpqar5DczRBLcPaZPucMEdn5pYjKRimXeDeR1MwHQKUcMIttc"
		const uintytoK87U = BigInt("196")
		const XenoFelixd6xYUv2 = await XenoFelix.new(stringGrW5tJI, stringuX7RH0K, uintytoK87U, {from: accounts[1]});
		const uintgv56bku = BigInt("71")
		const addresshYOEWZ = accounts[2]
		const uints0DkufH = BigInt("954")
		const addresssEOJdn = accounts[1]
		const uintJUuwA2d = BigInt("1638")
		const address9GEbAN = accounts[4]
		const uintvsLlXAM = BigInt("1258")
		const uintQLQp1xZ = BigInt("1726")
		const addressndNOpU0 = accounts[3]
		const boolC6zWLJX = await XenoFelixd6xYUv2.approve.call(addresshYOEWZ, uintgv56bku, {from: accounts[0]});
		const boolFnbBMTi = await XenoFelixd6xYUv2.paused.call({from: accounts[2]});
		await XenoFelixd6xYUv2.onlyOwner.call({from: accounts[0]});
		const boolq0tBIf = await XenoFelixd6xYUv2.decreaseAllowance.call(addresssEOJdn, uints0DkufH, {from: accounts[4]});
		const addressPUAfvfY = await XenoFelixd6xYUv2.burnFrom.call(address9GEbAN, uintJUuwA2d, {from: accounts[1]});
		const boolQLRf6rp = await XenoFelixd6xYUv2.lock.call(addressndNOpU0, uintQLQp1xZ, uintvsLlXAM, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintOTjW5El = BigInt("1222")
		const uintTHrRri = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintOTjW5El, uintTHrRri, {from: accounts[5]});
		const uintu3ZtGWN = BigInt("1131")
		const uintPs5M030 = BigInt("444")
		const addressi6EoJ14 = accounts[3]
		const uintNhNkq1i = BigInt("665")
		const addressUqCBJEa = accounts[1]
		const boolQ9Ywtqo = await XenoFelixk3Y39w2.paused.call({from: accounts[1]});
		const boolUDNooB = await XenoFelixk3Y39w2.lock.call(addressi6EoJ14, uintPs5M030, uintu3ZtGWN, {from: accounts[3]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressUqCBJEa, uintNhNkq1i, {from: accounts[3]});

		assert.equal(boolQ9Ywtqo, false)
		await expect(XenoFelixk3Y39w2.lock.call(addressi6EoJ14, uintPs5M030, uintu3ZtGWN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uinte26jHK = BigInt("1222")
		const uintOoP52ap = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uinte26jHK, uintOoP52ap, {from: accounts[5]});
		const addressXkjgO4h = accounts[3]
		const uintOPdDmN9 = BigInt("628")
		const addresso744YCn = accounts[1]
		const addressZZ8PNcm = "0x0000000000000000000000000000000000000001"
		const addresscj1G5N = accounts[2]
		const boolc3xFM7 = await XenoFelixk3Y39w2.unfreezeAccount.call(addressXkjgO4h, {from: accounts[5]});
		const uint8cpRUpc4 = await XenoFelixk3Y39w2.decimals.call({from: accounts[4]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addresso744YCn, uintOPdDmN9, {from: accounts[3]});
		const uint256bDDmvG = await XenoFelixk3Y39w2.allowance.call(addresscj1G5N, addressZZ8PNcm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixk3Y39w2.unfreezeAccount.call(addressXkjgO4h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringZjawCu = "f1azQ71GzWcqAF9hbHY1"
		const stringcjGEr7d = "efrF64MvJCsPf1BdRKLw"
		const uintyWlx9s4 = BigInt("1222")
		const uintKA2muY = BigInt("203")
		const XenoFelixk3Y39w2 = await XenoFelix.new(stringZjawCu, stringcjGEr7d, uintyWlx9s4, uintKA2muY, {from: accounts[5]});
		const addressmGXXHa6 = accounts[0]
		const uintod0Ddks = BigInt("628")
		const addressTFnjkuN = accounts[2]
		const addressIYciGFO = await XenoFelixk3Y39w2.addPauser.call(addressmGXXHa6, {from: accounts[5]});
		const boolqSaQM2I = await XenoFelixk3Y39w2.transfer.call(addressTFnjkuN, uintod0Ddks, {from: accounts[3]});

		await expect(XenoFelixk3Y39w2.transfer.call(addressTFnjkuN, uintod0Ddks, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})