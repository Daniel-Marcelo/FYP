package bct.ct413.controller;


import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.histquotes.HistoricalQuote;
import yahoofinance.histquotes.Interval;
import bct.ct413.model.TradeDetails;

import com.google.gson.Gson;

@Controller
public class SymbolInfoController {
	
	
	@RequestMapping(value = "/symbolInfoPage", method = RequestMethod.GET)
	public ModelAndView displayCharts(ModelAndView model) {
		model.addObject("trade", new TradeDetails());
		model.setViewName("symbolInfo");
		return model;
	}
	
	@RequestMapping(value = "getStockPrice/{value}", method = RequestMethod.GET)
	public @ResponseBody String getStockPerice(@PathVariable String value){
		
		Stock stock = YahooFinance.get(value);
		return new Gson().toJson(stock.getQuote().getPrice());
		
	}
	 
    @RequestMapping(value = "getStockInfo/{value}", method = RequestMethod.GET)
	public @ResponseBody String test(@PathVariable String value){
		
		Calendar from = Calendar.getInstance();
		Calendar to = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy MMM dd HH:mm:ss");		
		from.add(Calendar.YEAR, -20); 
		System.out.println("FROM: "+sdf.format(from.getTime()));
		System.out.println("TO: "+sdf.format(to.getTime()));
		
		Stock stock = YahooFinance.get(value, from, to,Interval.DAILY);
		
		System.out.println("SIZE OF OBJECT: "+stock.getHistory().size());
		for(HistoricalQuote quote : stock.getHistory())
			System.out.println(quote);
		
		return new Gson().toJson(stock);
	}
}
